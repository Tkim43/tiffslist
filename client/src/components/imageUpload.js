import React, {Component} from 'react'
import '../assets/css/sell.scss'
import {connect} from 'react-redux'

class ImageUpload  extends Component{
  constructor(props) {
    super(props)
    this.state = {
        file: {},
    }
  }

  componentDidMount(){
    this.setState({file: {...this.props.file}})
  }

  onChange=async(e)=>{
      var preview = document.querySelector('img');
      var file    = document.querySelector('input[type=file]').files[0];
      var reader  = new FileReader();

      reader.addEventListener("load", function () {
        preview.src = reader.result;

      }, false);

      if (file) {
        reader.readAsDataURL(file);
        console.log("reader", reader)
        
      }
    reader.onload = e => this.setState({ file: {...file, src: reader.result }});
    
  }

  render(){
    console.log("reader state in redner", this.state.file);
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props 
    return(
     <div className="labelInputContainer" file={this.state.file.src}>
        <label className="">{label}</label>
        <div className="input-container">
          <input className="form-control" name="image" type='file' accept='.jpg, .png, .jpeg, .gif' onChange={this.onChange}/>
        </div>
        <img></img>
     </div>
    )
}
}

function mapStateToProps(state) {
  const { item } = state
  return {
      data: item
  }
}


export default connect(mapStateToProps, {})(ImageUpload);