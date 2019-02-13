import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {createItemData} from '../actions'
import '../assets/css/sell.scss'
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
    
        }
    }


    handleForm = async (event) => {
        // debugger;
        const {createItemData, history} = this.props
        await createItemData(event.First + " " + event.last, new Date().toISOString().substring(0, 10), event.description, Number(event.price), event.location, event.item, event.contact);
        
        // const data = {
        //     name: event.First + " " + event.last,
        //     date: new Date.toISOString.substring(0, 10),
        //     description: event.description,
        //     image: 
        // }
        
        // createItem()
        
        history.push(`/image/itemID/${this.props.itemID}`);
    }
    renderInput = ({
        input,
        label,
        max,
        maxLength,
        min,
        pattern,
        type,
        meta: { touched, error, warning }
      }) => {
        //   debugger;
          return (
        <div className="form-row form-group-row">
            <div className="col">
                <label>{label}</label>
                <input  max={max} min={min} maxLength={maxLength} className="form-control" {...input} placeholder={label} pattern={pattern} type={type} />
                {touched &&
                ((error && <span className="text-danger">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
        )
    }

    render(){
        console.log("this is your state in render", this.props)
        const { handleSubmit } = this.props
        return (
            <div className="container">
                <div className="page-header text-center">
                    <div className="header">What Would You Like to Sell</div>
                </div>
                <form onSubmit={handleSubmit(this.handleForm)}>
                    <div className="" >
                        <Field  maxLength="20" className="col-6" name="First" label="First Name" component={this.renderInput} />
                        <Field  maxLength="20" className="col-6" name="last" label="Last Name" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field  maxLength="25" className="col" name="item" type="text" label="Item for sale" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field  maxLength="150" className="col" name="description" type="text" label="Description" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field  maxLength="7" pattern="\d*" className="col" name="price" type="text" label="Price" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field  maxLength="12" placeholder="" className="col" name="contact" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" label="Phone Number" component={this.renderInput} />
                        <label className="text-muted">Format: 714-123-1234</label>
                    </div>
                    <div className="">
                        <Field  maxLength="30" className="col" name="location" type="text" label="Location" component={this.renderInput} />
                    </div>

                    
                    {/* <div className="row">
                        <Field size = "s12" name = "image" label = "" component = {this.renderInput}/>
                    </div> */}
                    {/* <div className="">
                        <Field className="text-muted" name="image" type="file" label="Please select an image" component={Image} />
                    </div> */}

                    <div className="row justify-content-center">
                        <div className="but-container">
                            <button type="submit" className="submitBut btn btn-lg btn-block">Submit</button>
                        </div>
                    </div>
                </form>
                
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
        data: item,
        itemID: item.single
    }
}


export default connect(mapStateToProps, {
    createItemData,
})(Sell);
