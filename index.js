const express = require('express');
const mysql = require('mysql');
const db = require('./server/db');
const app = express();
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;


app.use(express.static(resolve(__dirname,'client','dist')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// require('./routes/api/image.js');

// module.exports = router;

const profile = require( './routes/api/profile' );
app.use( '/api/profile', profile); 


function errorHandling(req, res){
    res.status(req.status || 500).send(req.error || 'Server Error');
}

app.get('/api/iteminfo/', async (req, res, next) => {
    try {
        const{ID} = req.params;
        const query = 'SELECT * FROM ??';
        const inserts = ['item'];

        const sql = mysql.format(query, inserts);

        const iteminfo = await db.query(sql);
        res.send({
            success: true,
            iteminfo,
        });

    } catch (err){
        console.log('Error:', err);
        req.status = 500;
        req.error = 'Error getting item information';

        return next();
    }
    
}, errorHandling);

app.post('/api/createItem/name/:name/date/:date/description/:description/price/:price/location/:location/item/:item/contact/:contact/', async (req, res, next) => {
    
    try {
        const{name, date, description, price, location, item, contact} = req.params;
        // name, date, description, image, price, location, item, contact
        const query = 'INSERT INTO ?? (??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?)';
        const inserts = ['item', 'name', 'date', 'description', 'price','location','item', 'contact', name, date, description, price, location, item, contact];

        const sql = mysql.format(query, inserts);
        const iteminfo = await db.query(sql);

        res.send({
            success: true,
            iteminfo,
            newID: iteminfo.insertId
        });

    } catch (err){
        console.log("req", req)
        console.log('Error:', err);
        req.status = 500;
        req.error = 'Error creating item';

        return next();
    }
    
}, errorHandling);

app.post('/api/images/itemID/:itemID', async (req, res, next) => {

    try {
        // const{image} = req.body;
        const{itemID} = req.params;
        const {image} = req.body;

        const query = 'INSERT INTO ?? (??, ??) VALUES (?,?)';
        const inserts = ['images', 'itemID', 'image', itemID, image];

        const sql = mysql.format(query, inserts);

        const iteminfo = await db.query(sql);
        res.send({
            success: true,
            iteminfo
        });

    } catch (err){
        console.log("req", req)
        console.log('Error:', err);
        req.status = 500;
        req.error = 'Error storing Image';

        return next();
    }
    
}, errorHandling);

// app.get('/api/imageurl/ID/:ID/', async (req, res, next) => {
//     try {
//         const{ID} = req.params;
//         const query = 'SELECT * FROM ?? WHERE ?? = ?';
//         const inserts = ['images', 'ID', ID];

//         const sql = mysql.format(query, inserts);

//         const imageurl = await db.query(sql);
//         res.send({
//             success: true,
//             imageurl,
//         });

//     } catch (err){
//         console.log('Error:', err);
//         req.status = 500;
//         req.error = 'Error getting image URL';

//         return next();
//     }
    
// }, errorHandling);

// app.get('/api/imageurl/', async (req, res, next) => {
//     try {
//         // const{ID} = req.params;
//         const query = 'SELECT * FROM ??';
//         const inserts = ['images'];

//         const sql = mysql.format(query, inserts);

//         const imageurl = await db.query(sql);
//         res.send({
//             success: true,
//             imageurl,
//         });

//     } catch (err){
//         console.log('Error:', err);
//         req.status = 500;
//         req.error = 'Error getting image URL';

//         return next();
//     }
    
// }, errorHandling);


// SELECT * 
// FROM `item` INNER JOIN `images` 
// ON item.ID = images.itemID; 

// SELECT i.*, p.image
// FROM `item` AS i INNER JOIN `images` AS `p`
// ON i.ID = p.itemID;

app.get('/api/totalitems/', async (req, res, next) => {
    try {
        // const{ID} = req.params;
        const query = 'SELECT * FROM ?? INNER JOIN ?? ON  item.ID = images.itemID';
        const inserts = ['item', 'images'];

        const sql = mysql.format(query, inserts);

        const imageurl = await db.query(sql);
        res.send({
            success: true,
            imageurl,
        });

    } catch (err){
        console.log('Error:', err);
        req.status = 500;
        req.error = 'Error getting all information';

        return next();
    }
    
}, errorHandling);




//starts Express server on defined port
app.listen(PORT, ()=>{
    console.log('Server running on PORT:', PORT);
});

// add routes to express app
// routes(app);

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});