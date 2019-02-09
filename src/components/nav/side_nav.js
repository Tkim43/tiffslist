import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './sideNav.scss'

class Sidenav extends Component{
    closeNav(){
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginLeft = "0";
        // document.body.style.backgroundColor = "white";
    }
    render(){
        return(
        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            <Link to="/">Home <i className="fas fa-home"></i></Link>
            <Link to="/sell">Sell</Link>
            <Link to="/item">Items for sale</Link>
            <Link to="/about">About</Link>
        </div>
        );
    }
}

export default Sidenav;