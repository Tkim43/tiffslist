import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
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
        description:"",
        location:"",
        image: "",
    }
    handleForm = (event) => {
        console.log("form", event)
    }
    // handleSubmit= async (event)=>{
    //     const{history} = this.props
    //     event.preventDefault();
        // console.log("it went form", event.currentTarget)
        // console.log(event.target[0].value,
        //     event.target[1].value,
        //     event.target[3].value,
        //     event.target[4].value,
        //     event.target[5].value,
        //    event.target[6].value,
        //   event.target[7].value,)
        // console.log(event.target.elements[0].value,
        //     event.target.elements[1].value,
        //     event.target.elements[3].value,
        //     event.target.elements[4].value,
        //     event.target.elements[5].value,
        //    event.target.elements[6].value,
        //   event.target.elements[7].value,)

        // console.log("event", event.target[0])
        // console.log("elements", event.target.elements)
        // console.log("location", event.target.location)

        // await this.setState({
        //     first: event.target[0].value,
        //     last: event.target[1].value,
        //     // item: event.target[4].value,
        //     contact: event.target[3].value,
        //     price: event.target[5].value,
        //     description: event.target[6].value,
        //     location: event.target[7].value,
        // })
                    // image: event.target[8].value,

        // console.log("this is your state", this.state)
        // await history.push('/item')
    // }
    renderInput (props) {
        return (
            <div className= {`input-field col ${props.size}`}>
                <input {...props.input} type= {props.type || "text"} id = {props.input.name}/>
                <label htmlFor= {props.input.name} >{props.label}</label>
                <ul>
                    {(props.meta.touched || props.meta.dirty) && props.meta.error && props.meta.error.map ( (item, index) => {
                        return <li key = {index} className="red-text">{item}</li>
                    })}
                </ul>
            </div>
        );
    }
    render() {
        console.log("this is your state in render", this.state)
        console.log("your props", this.props);
        const {handleSubmit}= this.props
        return (
            <div className="container">
                <div className="page-header text-center">
                    <h1>What Would You Like to Sell</h1>
                </div>
                {/* <form onSubmit={this.handleSubmit}className="">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="validationCustom03">First Name</label>
                            <input name="first" type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                            <label htmlFor="formGroupExampleInput">Last Name</label>
                            <input name="last" type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Item for sale</label>
                        <input name="item" type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Contact Information</label>
                        <input name="contact" type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
                    </div> */}
                    {/* <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div> */}
                    {/* <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Price</label>
                        <input name="price" type="number" className="form-control" id="formGroupExampleInput" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea name="textarea" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div> */}
                    {/* <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                    </div> */}
                    {/* <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Location</label>
                        <input name="location" type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label name="file" className="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div>
                    <div className="justify-content-center row ">
                        <button onSubmit={this.handleSubmit} className="text-white button btn btn-primary btn-lg" type="submit">Submit</button>
                    </div> */}
                {/* </form> */}

                <form onSubmit = {handleSubmit(this.handleForm)}>
                    <div className="row">
                        <Field size = "s12" name = "displayName" label = "Username" component = {this.renderInput}/>
                    </div>
                    <div className="row">
                        <Field size = "s6" name= "First" label= "First Name" component = {this.renderInput}/>
                        <Field size = "s6" name= "last" label= "Last Name" component = {this.renderInput}/>
                    </div>
                    <div className="row">
                        <Field size = "s12" name= "item" type= "text" label= "Item for sale" component = {this.renderInput}/>
                    </div>
                    <div className="row">
                        <Field size = "s12" name= "description" type= "text" label= "Description" component = {this.renderInput}/>
                    </div>
                    <div className="row">
                        <Field size = "s12" name= "price" type= "text" label= "Price" component = {this.renderInput}/>
                    </div>
                    <div className="row">
                        <Field size = "s12" name= "contact" type= "text" label= "Contact Information" component = {this.renderInput}/>
                    </div>
                    <div className="row">
                        <Field size = "s12" name= "location" type= "text" label= "Location" component = {this.renderInput}/>
                    </div>
                    {/* <div className="row">
                        <div className="col s12 text-danger">{this.props.repeatUserError[1]}</div>
                    </div>
                    <div className="row">
                        <div className="col s12 text-danger">{this.props.repeatUserError[0]}</div>
                    </div> */}
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className = "green lighten-2 btn">Submit</button>
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}

Sell = reduxForm ({
    form: 'Sell',
    // validate: validate
})(Sell);

function mapStateToProps (state){
    const {item} = state
    return {
        data: item
    }
}
 
export default connect (mapStateToProps, {
    
})(Sell);
