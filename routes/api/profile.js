

const express = require( 'express' );
const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const s3Config = require('../../server/config/aws');

const {accessKeyId, secretAccessKey, bucket} = require('../../server/config/aws');
const db = require('../../server/db');
const router = express.Router();

/**
 * PROFILE IMAGE STORING STARTS
 */

aws.config.update(s3Config);

const s3 = new aws.S3();

/**
 * Single Upload
 */
const profileImgUpload = multer({
	storage: multerS3({
		s3: s3,
		bucket: s3Config.bucket,
		acl: 'private',
		key: function (req, file, cb) {

			cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
		}
	}),
	limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
	fileFilter: function( req, file, cb ){
		checkFileType( file, cb );
	}
}).single('profileImage');

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType( file, cb ){
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
	// Check mime
	const mimetype = filetypes.test( file.mimetype );
	if( mimetype && extname ){
		return cb( null, true );
	} else {
		cb( 'Error: Images Only!' );
	}
}

/**
 * @route POST /api/profile/business-img-upload
 * @desc Upload post image
 * @access public
 */
router.post( '/profile-img-upload', ( req, res ) => {
	profileImgUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
				// If Success
				const imageName = req.file.key;
				const imageLocation = req.file.location;

				
// Save the file name into database into profile model
				res.json( {
					image: imageName,
					location: imageLocation
				} );
			}
		}
	});
});

exports.getImages = async (req, res) => {
    const images = await db.query('SELECT * FROM `images`');

    res.send({
        success: true,
        images
    });
}

// example
// exports.getObjects = function (req, res) {
//     var item = req.body;
//     var params = { Bucket: req.params.bucketName, Key: 'keyname'}; // keyname can be a filename
//     s3.getObject(params, function (err, data) {
//         if (err) {
//             return res.send({ "error": err });
//         }
//         res.send({ data });
//     });
// }

exports.getObjects = function (req, res) {
    const {image} = req.body;
    var params = { Bucket: 'tiffslist', Key: 'me.png'}; // keyname can be a filename
    s3.getObject(params, function (err, data) {
        if (err) {
            return res.send({ "error": err });
        }
        res.send({ data });
    });
}



module.exports = router;