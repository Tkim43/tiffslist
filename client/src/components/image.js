import React, {Component,Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import '../assets/css/image.scss'
import {storeImage} from '../actions/index'

class Image extends Component{
    state={
        selectedFile: null,
        selectedFiles: null,
        file: null,
        loading: false,

        fileName: "",
    }
    singleFileChangedHandler = ( event ) => {

		this.setState({
			selectedFile: event.target.files[0]
        });
        var preview = document.querySelector('img');
          var file    = document.querySelector('input[type=file]').files[0];
          var reader  = new FileReader();

          reader.addEventListener("load", function () {
            preview.src = reader.result;

          }, false);

          if (file) {
            reader.readAsDataURL(file);
          }
        console.log("selected file",event.target.files[0] )
        console.log("this is your props", this.props);

    };
    
    singleFileUploadHandler = async ( event ) => {
		const data = new FormData();
// If file selected
		if ( this.state.selectedFile ) {
			data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
			axios.post( '/api/profile/profile-img-upload', data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
				.then( ( response ) => {
					if ( 200 === response.status ) {
						// If file size is larger than expected.
						if( response.data.error ) {
							if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
								this.ocShowAlert( 'Max size: 2MB', '#ff8a80' );
							} else {
								console.log( response.data );
// If not the given file type
								this.ocShowAlert( response.data.error, '#ff8a80' );
							}
						} else {
                            // Success
                            var fileName = response.data;
                            this.setState({
                                fileName
                            })
                            console.log( 'filedata', fileName );
        
                            const { match: { params } } = this.props;
                            this.saveImage(fileName.location, params.itemID)


                                this.ocShowAlert( 'File Uploaded', '#3089cf' );
                                // if (response.data) {
                                //     console.log("it went in the success")
                                //     const{history} = this.props;
                                //     history.push('/item')
                                // }

							
						}
					}
				}).catch( ( error ) => {
				// If another error
				this.ocShowAlert( error, '#ff8a80' );
			});
		} else {
			// if file not selected throw error
			this.ocShowAlert( 'Please upload a file', '#ff8a80' );
		}
    };

    saveImage = (file, itemID)=>{
        const {storeImage,history} = this.props

        this.setState({
            loading: true
        }, async ()=>{
            await storeImage(file, itemID);

            await history.push('/item')
        })
        
    }

    
    ocShowAlert = ( message, background = '#3089cf' ) => {
		let alertContainer = document.querySelector( '#oc-alert-container' ),
			alertEl = document.createElement( 'div' ),
			textNode = document.createTextNode( message );
		alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
        // $( alertEl ).css( 'background', background );
        alertEl.style.backgroundColor = background
		alertEl.appendChild( textNode );
		alertContainer.appendChild( alertEl );
		setTimeout( function () {
            // $( alertEl ).fadeOut( 'slow' );
            alertEl.style.opacity -=0.1;
            // $( alertEl ).remove();
            alertEl.style.display ="none";
            // alertEl.style.display =""
		}, 1000 );
	};
    newMethod() {
        // $("#somediv").addClass("thisClass");
        var element = document.getElementById('#somediv');
        element.classList.add('thisClass');
        // element.classList.add('class');
    }

    render(){
        console.log("this is your props", this.props)
        if(this.state.loading){
            return(
                <div className="loading container justify-content-center">
                    <div className="loader"></div>
                </div>
            )
        }
        return(
            <div className="container">
            <div className="text-white" id="oc-alert-container"></div>
				{/* Single File Upload*/}
				<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
						<h1 style={{ color: '#555', marginLeft: '12px' }}>Image Uploader</h1>
						{/* <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p> */}
					</div>
					<div className="card-body">
						<p className="card-text">Please upload an image for the item you wish to sell.</p>
						<input accept=".png, .jpeg, .gif, .jpg, .pdf, .tif, " type="file" onChange={this.singleFileChangedHandler}/>
						<div className="mt-5">
							<button className="upload-btn btn btn-info" onClick={this.singleFileUploadHandler}>Upload</button>
						</div>
					</div>
				</div>
                <h3 className="text-center">Preview of your image down below <i className="fas fa-arrow-down"></i></h3>
                <div className="img-container">
                    <img className="img-size"/>
                </div>
                
                <div className="space"></div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    const { item } = state
    return {
        data: item
    }
}


export default connect(mapStateToProps, {
    storeImage,
})(Image);
