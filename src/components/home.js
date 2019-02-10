import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/home.scss'
import '../assets/css/modal.scss'

class Home extends Component{
    state={
        show: false
    }
    showModal = () => {
        this.setState({
            show: true,
            
        })
    }
    hideModal = () => {
        this.setState({
            show: false,
            
        })
    }
    render(){
        if (this.state.show) {
            return (
                <div className="modal" onClick={this.hideModal}>
                    <div onClick={e => e.stopPropagation()} className="modal-content">
                        <div onClick={this.hideModal} className="basic-modal-close center">X</div>
                        <div className="card">
                            {/* <Link to="/"><img className="card-img-top rounded" src={Test} alt="Card image cap" /></Link> */}
                            <div className="card-body">
                                {/* <h5 className="card-title"><Link to="/">{item}</Link></h5>
                                <p className="card-text">{description}</p> */}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Date:</li>
                                <li className="list-group-item">Price: </li>
                                <li className="list-group-item">Location: </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        return(
        <div className="container jumboContainer">
            <div className="jumbotron jumboTop">
                <h1 className="display-4 welcome">Welcome!</h1>
                <p className="lead">Tiffslist is an American classified advertisements website which is devoted to for sale items, items wanted, community, gigs, and discussion forums.</p>
                <hr className="my-4"></hr>
                <p>This website was built using React.JS, Node.JS, Redux, Javascript mySQL, CSS, SCSS, HTML and Bootstrap CSS.</p>
                <Link className="btn btn-primary btn-lg" to="/about" role="button">About Me</Link>
            </div>
            <div className="jumbotron">
                <h1 className="display-4 preview">How to use the website</h1>
                <p className="lead">I have provided a preview of how the website works.</p>
                <hr className="my-4"></hr>
                <p>Click preview to start.</p>
                <button className="btn btn-info btn-lg" onClick={this.showModal} role="button">Preview</button>
            </div>
        </div>
        )
    }
}

export default Home;