import React from 'react';
import Header from './Components/Header.js';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      image_url:'',
      upload:false,
      file:[],
      name:''
    }
  }

  onImageSelect = (e)=>{
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        image_url: reader.result,
      });
    }

    reader.readAsDataURL(file)
  }

  onClickUpload = () =>{
    if(this.state.image_url && this.state.name)
    this.setState({uploading:true});
  }

  onNameChange = (event) =>{
    this.setState({name:event.target.value})
  }

  onRemove = () =>{
    this.setState({uploading:false})
  }
  render(){
    //console.log(this.state.image_url);
    return (
      <div className="App">
        <Header />
        <div className="body">
          <div className="inner">
            <div className="name">
              Name :-
              <input className="input_name" type="text" placeholder="Your Name" value={this.state.name} onChange={this.onNameChange} required={true} ></input>
            </div>
            <div className="url">
              Select Profile Picture...<input className="input_url" type="file"  onChange={this.onImageSelect} />
            </div>
            <div className="button_submit">
              <button className="submit" onClick={this.onClickUpload} >Submit </button>
            </div>
            {
              this.state.uploading === true
              ? <div className="onsubmit" >
                  <span className="submitname">
                      Welcome Back..... {this.state.name}
                  </span>
                  <img src={this.state.image_url} alt="" />
                  <button className="submit" onClick={this.onRemove} >Reset</button>
                </div>
              :<div >
                Enter Details...
              </div>
            }

          </div>
          <footer className="footer">
          </footer>
        </div>

      </div>
    );
  }
}

export default App;
