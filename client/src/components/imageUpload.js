import React, {Component} from 'react'
import '../assets/css/sell.scss'
import axios from 'axios';
import {connect} from 'react-redux'

class ImageUpload  extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedFile: null,
			selectedFiles: null
    }
  }

  // componentDidMount(){
  //   this.setState({file: {...this.props.file}})
  // }

  // onChange=async(e)=>{
  //     var preview = document.querySelector('img');
  //     var file    = document.querySelector('input[type=file]').files[0];
  //     var reader  = new FileReader();

  //     reader.addEventListener("load", function () {
  //       preview.src = reader.result;

  //     }, false);

  //     if (file) {
  //       reader.readAsDataURL(file);
  //       console.log("reader", reader)
        
  //     }
  //   reader.onload = e => this.setState({ file: {...file, src: reader.result }});
    
  // }
  singleFileChangedHandler = ( event ) => {
		this.setState({
			selectedFile: event.target.files[0]
		});
	};

	multipleFileChangedHandler = (event) => {
		this.setState({
			selectedFiles: event.target.files
		});
		console.log( event.target.files );
	};

	singleFileUploadHandler = ( event ) => {
		const data = new FormData();
// If file selected
		if ( this.state.selectedFile ) {
      // data.document.body.appendChild('profileImage', this.state.selectedFile, this.state.selectedFile.name);
// 			data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
// 			axios.post( '/api/profile/profile-img-upload', data, {
// 				headers: {
// 					'accept': 'application/json',
// 					'Accept-Language': 'en-US,en;q=0.8',
// 					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
// 				}
// 			})
// 				.then( ( response ) => {
// 					if ( 200 === response.status ) {
// 						// If file size is larger than expected.
// 						if( response.data.error ) {
// 							if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
// 								this.ocShowAlert( 'Max size: 2MB', 'red' );
// 							} else {
// 								console.log( response.data );
// // If not the given file type
// 								this.ocShowAlert( response.data.error, 'red' );
// 							}
// 						} else {
// 							// Success
// 							let fileName = response.data;
// 							console.log( 'filedata', fileName );
// 							this.ocShowAlert( 'File Uploaded', '#3089cf' );
// 						}
// 					}
// 				}).catch( ( error ) => {
// 				// If another error
// 				this.ocShowAlert( error, 'red' );
// 			});
// 		} else {
// 			// if file not selected throw error
// 			this.ocShowAlert( 'Please upload file', 'red' );
		}
	};

	

	// ShowAlert Function
	ocShowAlert = ( message, background = '#3089cf' ) => {
		let alertContainer = document.querySelector( '#oc-alert-container' ),
			alertEl = document.createElement( 'div' ),
			textNode = document.createTextNode( message );
		alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
		$( alertEl ).css( 'background', background );
		alertEl.appendChild( textNode );
		alertContainer.appendChild( alertEl );
		setTimeout( function () {
			$( alertEl ).fadeOut( 'slow' );
			$( alertEl ).remove();
		}, 3000 );
	};


  render(){
    console.log("reader state in redner", this.state);
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props 
    return(
     <div className="labelInputContainer" file={this.state.file.src}>
        <label className="">{label}</label>
        <div className="input-container">
          <input className="form-control" name="image" type='file' accept='.jpg, .png, .jpeg, .gif' onChange={this.singleFileuploadHandler}/>
        </div>
        <img></img>
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


export default connect(mapStateToProps, {})(ImageUpload);