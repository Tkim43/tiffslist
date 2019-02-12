import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {createItemData} from '../actions'
import '../assets/css/sell.scss'
import axios from 'axios';
import $ from 'jquery';
// import Image from './imageUpload'


class Sell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            ID: null,
            first: "",
            last: "",
            item: "",
            contact: "",
            price: null,
            description: "",
            location: "",
            image: "",
            selectedFile: null,
			selectedFiles: null
    
        }
    }

    singleFileChangedHandler = ( event ) => {
		this.setState({
			selectedFile: event.target.files[0]
        });
        console.log("selected file", this.state)
    };
    
    singleFileUploadHandler = ( event ) => {
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
								this.ocShowAlert( 'Max size: 2MB', 'red' );
							} else {
								console.log( response.data );
// If not the given file type
								this.ocShowAlert( response.data.error, 'red' );
							}
						} else {
							// Success
							let fileName = response.data;
							console.log( 'filedata', fileName );
							this.ocShowAlert( 'File Uploaded', '#3089cf' );
						}
					}
				}).catch( ( error ) => {
				// If another error
				this.ocShowAlert( error, 'red' );
			});
		} else {
			// if file not selected throw error
			this.ocShowAlert( 'Please upload file', 'red' );
		}
    };
    
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


    
    handleForm = async (event) => {
        debugger;
        const {createItemData,history} = this.props
        await createItemData(event.First + " " + event.last, new Date().toISOString().substring(0, 10), event.description, Number(event.price), event.location, "iasdfasdf", event.item, event.contact);
        
        // const data = {
        //     name: event.First + " " + event.last,
        //     date: new Date.toISOString.substring(0, 10),
        //     description: event.description,
        //     image: 
        // }
        
        // createItem()
        
        history.push('/item');
    }
    renderInput = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
      }) => {
        //   debugger;
          return (
        <div className="form-row form-group-row">
            <div className="col">
                <label>{label}</label>
                <input className="form-control" {...input} placeholder={label} type={type} />
                {touched &&
                ((error && <span className="text-danger">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
        )
    }

    render(){
        // console.log("this is your state in render", this.state)
        console.log("your props in sell", this.props);
        console.log("state of sell ", this.state)
        const { handleSubmit } = this.props
        return (
            <div className="container">
                <div className="page-header text-center">
                    <h1>What Would You Like to Sell</h1>
                </div>
                <form onSubmit={handleSubmit(this.handleForm)}>
                    <div className="" >
                        <Field  className="col-6" name="First" label="First Name" component={this.renderInput} />
                        <Field  className="col-6" name="last" label="Last Name" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field  className="col" name="item" type="text" label="Item for sale" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field  className="col" name="description" type="text" label="Description" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field className="col" name="price" type="number" label="Price" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field  className="col" name="contact" type="text" label="Contact Information" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field  className="col" name="location" type="text" label="Location" component={this.renderInput} />
                    </div>

                    
                    {/* <div className="row">
                        <Field size = "s12" name = "image" label = "" component = {this.renderInput}/>
                    </div> */}
                    {/* <div className="">
                        <Field className="text-muted" name="image" type="file" label="Please select an image" component={Image} />
                    </div> */}

                    <div className="row justify-content-center">
                        <div className="but-container">
                            <button className="submitBut btn btn-lg btn-block">Submit</button>
                        </div>
                    </div>
                </form>
                
				
                <div id="oc-alert-container"></div>
				{/* Single File Upload*/}
				<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
						<h3 style={{ color: '#555', marginLeft: '12px' }}>Single Image Upload</h3>
						<p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p>
					</div>
					<div className="card-body">
						<p className="card-text">Please upload an image for your profile</p>
						<input type="file" onChange={this.singleFileChangedHandler}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload!</button>
						</div>
					</div>
				</div>

            </div>
        )
    }
}

Sell = reduxForm({
    form: 'Sell',
    validate
})(Sell);

function validate({ First,  last, item, description, price, contact, location}){
    const error = {};
    if(!First) error.First = 'Please enter your first name';
    if(!last) error.last = 'Please enter your last name';
    if(!item) error.item = 'Required';
    if(!description) error.description = 'Must add a description';
    if(!contact) error.contact = 'Please enter your contact information';
    if(!location) error.location = 'Required';
    if(!price) error.price = 'Pease enter an amount';
    if(price && isNaN(Number(price))) error.Amount = 'Must be a number';
    return error;
}

function mapStateToProps(state) {
    const { item } = state
    return {
        data: item
    }
}


export default connect(mapStateToProps, {
    createItemData,
})(Sell);
