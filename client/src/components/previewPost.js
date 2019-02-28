import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { getSingleItem} from '../actions/index'
import { connect } from 'react-redux';
import '../assets/css/preview.scss'

class PreviewPost extends Component{
    componentDidMount(){
        const {match :{params}} = this.props;
        console.log("params", params.itemID);
        const {getSingleItem} = this.props;
        getSingleItem(params.itemID);
    }
    render(){
        console.log("this is your props", this.props);
        return(
            <div className="container">
                <h1>Preview Post</h1>
                <div className="preview-content row justify-content-center">
                    <div className="card">
                        <img className="card-img-top rounded" src={this.props.data.image} alt="Image Preview"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.data.item}</h5>
                            <p className="card-text">{this.props.data.description}</p>
                        </div>
                        <ul className="list-group list-group-flush midText">
                            <li className="list-group-item">Phone Number: {this.props.data.contact}</li>
                            <li className="list-group-item">Date: {this.props.data.date ? this.props.data.date.substring(0,9) : ""}</li>
                            <li className="list-group-item">Price: {this.props.data.price}</li>
                            <li className="list-group-item">Location: {this.props.data.location}</li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-secondary btn-lg btn-pad" >EDIT</button>
                    <Link to="/item" className="btn btn-success btn-lg btn-pad" >DONE</Link>
                </div>
                <div className="space"></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { item } = state
    return {
        data: item.data,
    }
}
export default connect(mapStateToProps, {
    getSingleItem
})(PreviewPost);

// export default PreviewPost;