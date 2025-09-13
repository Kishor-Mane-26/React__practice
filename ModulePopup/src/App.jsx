// import React from "react";
import { Component } from "react";
import ReactDom from "react-dom";

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      openModle : false
    }
  }

  openModel = () => {
    this.setState({openModle:true});
  }
  closeModel = () => {
    this.setState({openModle:false});
  }
  render(){
    return<>
      <div>
        <button onClick={this.openModel}>Open Model</button>
        {
          this.state.openModle && (<div className="model-overlay">
            <div className="model-content">
              <h2>Model Title</h2>
              <p>Model Content</p>
              <button onClick={this.closeModel}>Close</button>
            </div>
          </div>)
        }
      </div>
    </>
  }
}