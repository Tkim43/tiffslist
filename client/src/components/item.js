import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllData} from '../actions/index'
import Test from '../assets/images/sample.png'
import { connect } from 'react-redux';
import None from '../assets/images/noimage.jpeg'
import '../assets/css/item.scss'
import '../assets/css/modal.scss'


class Item extends Component {
    state = {
        show: false,
        ID: null,
        item: "",
        description:"",
        date:"",
        price: "",
        location:"",
        file:""
    }
    componentDidMount (){
        const { getAllData} = this.props
        getAllData();
        // getItemData();
        // getImage();
        // var preview = document.querySelector('img');
        //   var file    = event.target.name.files[0];
        //   var reader  = new FileReader();
    
        //   reader.addEventListener("load", function () {
        //     preview.src = reader.result;
        //   }, false);
    
        //   if (file) {
        //     reader.readAsDataURL(file);
        //   }
        // this.setState({
        //     file
        // })

    }
    showModal = (ID, item, description, date, price, location, image) => {
        this.setState({
            show: true,
            ID,
            item,
            description,
            date,
            price,
            location,
            image
        })
    }
    onChange=(e)=>{
        // let reader = new FileReader();
        // reader.onload = e => this.setState({ file: reader.result });
        // reader.readAsDataURL(e.target.files[0]);
          
    }
    hideModal = () => {
        this.setState({
            show: false,
            
        })
    }
    render() {
        const{ item, description, date, price, location, } = this.state
        console.log("this is your props", this.props.all.data.data)
        if (this.state.show) {
            return (
                <div className="modal" onClick={this.hideModal}>
                    <div onClick={e => e.stopPropagation()} className="modal-content">
                        <div onClick={this.hideModal} className="basic-modal-close center">X</div>
                        <div className="card">
                            <img className="card-img-top rounded" src={this.state.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{item}</h5>
                                <p className="card-text">{description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Date: {date}</li>
                                <li className="list-group-item">Price: {price}</li>
                                <li className="list-group-item">Location: {location}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            // if(!this.props.data){
            //     return
            // }
           
            <div className="all">
                <div className="row">
                    <div className="col-12 card-container">
                        <div className="page-header text-center">
                            <h1>Buy, Sell, Look and Trade.</h1>
                        </div>
                        <div className="row justify-content-center" >
                        {this.props.all.data.data ?
        this.props.all.data.data.imageurl.map ((item, i) => {
                item.date = item.date.substring(0,10);
                return(
                                <div className="card col-sm-3" key={i}>
                                    <img onClick={() => this.showModal(item.i, item.item, item.description, item.date, item.price, item.location, item.image)} className="card-img-top rounded" src={item.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 onClick={()=>this.showModal(item.i, item.item, item.description, item.date, item.price, item.location, item.image)} className="card-title">{item.item}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush midText">
                                        <li className="list-group-item">Date: {item.date}</li>
                                        <li className="list-group-item">Price: {item.price}</li>
                                        <li className="list-group-item">Location: {item.location}</li>
                                    </ul>
                                </div>
                            )
                        })
                            : <h2>There are no items for sale</h2>
                        }
                            </div>
                    </div>
                </div>
                <div className="space"></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { item } = state
    return {
        data: item.data,
        all: item,
        imgurl: item.images
    }
}
export default connect(mapStateToProps, {
    getAllData
})(Item);