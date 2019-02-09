import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Test from '../assets/images/sample.png'

class Sell extends Component{
    render(){
        return(
            <div className="row">
                <div className="card col-sm-3">
                    <img className="card-img-top" src={Test} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"><Link to="/">ITEM TITLE</Link></h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Date Posted</li>
                        <li className="list-group-item">Price</li>
                        <li className="list-group-item">Location</li>
                    </ul>
                </div>
                <div className="card col-sm-3">
                    <img className="card-img-top" src={Test} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"><Link to="/">ITEM TITLE</Link></h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Date Posted</li>
                        <li className="list-group-item">Price</li>
                        <li className="list-group-item">Location</li>
                    </ul>
                </div>
                <div className="card col-sm-3">
                    <img className="card-img-top" src={Test} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"><Link to="/">ITEM TITLE</Link></h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Date Posted</li>
                        <li className="list-group-item">Price</li>
                        <li className="list-group-item">Location</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sell;