import React, {Component} from 'react'
import '../assets/css/sell.scss'

export default class ImageUpload  extends Component{
  constructor(props) {
    super(props)
    this.state = {
        file: ''
    }
  }

  onChange=(e)=>{
    // let reader = new FileReader();
    // reader.onload = e => this.setState({ file: reader.result });
    // reader.readAsDataURL(e.target.files[0]);

      var preview = document.querySelector('img');
      var file    = document.querySelector('input[type=file]').files[0];
      var reader  = new FileReader();

      reader.addEventListener("load", function () {
        preview.src = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    this.setState({
        file
    })
      
  }

  render(){
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props 
    return(
     <div className="labelInputContainer">
        <label className="">{label}</label>
     <div className="input-container">
       <input className="form-control" type='file' accept='.jpg, .png, .jpeg, .gif' onChange={this.onChange}/>
     </div>
     <img></img>
     </div>
    )
}
}