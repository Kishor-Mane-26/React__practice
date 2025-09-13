import React, { Component } from "react";
import ReactDom from "react-dom"

class App extends Component{
  constructor(){
    super();
    this.state={
      flag:true,
      msg:"Good Morning"
    }
  }
  changeMsg = () => {
    this.setState({msg:"Good Afternoon"});
  }
  render(){
    return<>
      {
        this.state.flag &&<h1>{this.state.msg}</h1>
      }
      <input type="button" value="Click" onClick={this.changeMsg}/>
    </>
  }
}
export default App
