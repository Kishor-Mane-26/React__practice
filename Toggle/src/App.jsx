import React from "react";
import { Component } from "react";
import ReactDom from "react-dom";

class App extends Component{
  constructor(){
    super();
    this.state = {
      modeIs : false
    }
  }

  toggleThem = () => {
    this.setState({modeIs:!(this.state.modeIs)});
  }
  render(){
    return<>
      <div className={this.state.modeIs?"app dark" : "app light"}>
        <button onClick={this.toggleThem}>Toggle {this.state.modeIs?'Dark Mode ' : 'Light Mode'}</button>
      </div>
    </>
  }
}
export default App
