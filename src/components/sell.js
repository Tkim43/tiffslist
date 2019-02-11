import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {createItemData} from '../actions'
import '../assets/css/sell.scss'


class Sell extends Component {
    state = {
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
    handleForm = (event) => {
        // event.preventDefault();
        // name, date, item, description, price, contact, location, image
        console.log("form", event)

        console.log("date", new Date().toISOString());

        
        const {createItemData, history} = this.props
        createItemData(event.First + " " + event.last, new Date().toISOString().substring(0, 10), event.description, "image", Number(event.price), event.location, event.item, event.contact);
        history.push('/item');
    }
    renderInput = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
      }) => (
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

    // renderInput(props) {
    //     console.log("props", props)
    //     return (
    //         <div className={`input-group row`}>
    //             <input className="col form-control" {...props.input} type={props.type || "text"} id={props.input.name} />
    //             <label className="col" htmlFor={props.input.name} >{props.label}</label>
    //             <ul>
    //                 {(props.meta.touched || props.meta.dirty) && props.meta.error && props.meta.error.map((item, index) => {
    //                     return <li key={index} className="red-text">{item}</li>
    //                 })}
    //             </ul>
    //         </div>
    //     );
    // }
    render() {
        console.log("this is your state in render", this.state)
        console.log("your props", this.props);
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
                        <Field  nclassName="col" name="contact" type="text" label="Contact Information" component={this.renderInput} />
                    </div>
                    <div className="">
                        <Field  className="col" name="location" type="text" label="Location" component={this.renderInput} />
                    </div>
                    {/* <div className="row">
                        <Field size = "s12" name = "image" label = "" component = {this.renderInput}/>
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

    // createItemData(event.First + " " + event.last, new Date().toISOString().substring(0, 10), event.description, "image", Number(event.price), event.location, event.item, event.contact);
    if(!First) error.First = 'Required';
    if(!last) error.last = 'Required';
    if(!item) error.item = 'Required';
    if(!description) error.description = 'Required';
    if(!contact) error.contact = 'Required';
    if(!location) error.location = 'Required';
    if(price && isNaN(Number(price))) error.Amount = 'Must be a number'
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
