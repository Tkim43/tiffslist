import React,{Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import SideNav from './side_nav'
import './nav.scss'

class Nav extends Component{
    state={
        common:[
            {
                text: 'HOME',
                to: '/'
            },
            {
                text: 'SELL',
                to: '/sell'
            },
            {
                text: 'ITEMS FOR SALE',
                to: '/item'
            },
            {
                text: 'ABOUT',
                to: '/about'
            }
        ],
        visible: false
    }
    buildLink(link){
        return (
        <li className="nav-item" key={link.to}>
            <Link className="nav-link text-white" to={link.to}>{link.text}</Link>
        </li>);
    }
    // toggleVisible=()=>{
    //     this.setState({
    //         visible: !this.state.visible
    //     })
    // }
    openNav=()=>{
        
        // if(this.state.visible){
        //     document.addEventListener('click', this.handleOutsideClick, false);
        // } else {
        //     document.removeEventListener('click', this.handleOutsideClick, false);
        // }
        // this.toggleVisible
        document.getElementById("mySidenav").style.width="258px";
        // document.body.style.background = "rgba(0,0,0,0.4)";
    }
    renderLinks= ()=>{
        const {common} =this.state
        const commonLinks = common.map(this.buildLink);
        return[...commonLinks];
    }
    // handleOutsideClick=()=>{
    //     if (document.getElementById("mySidenav")) {
    //         return;
    //     }
    // }
    render(){
        return(
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar">
                    <Link className="navbar-brand" to="/" >Tiffslist</Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="nav nav-tabs">
                            {this.renderLinks()}
                        </ul>
                    </div>
                    <div onClick={this.openNav} className="menu text-white d-lg-none d-xl-none"> <i className="fas fa-bars"></i></div>
                </nav>
                <SideNav/>
            </Fragment>
            
        )
    }
}

export default Nav;