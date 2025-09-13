import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

let styleSubmit={
  backgroundColor:"aqua",
  width:"10rem",
  height:"4rem",
  // backgroundColor:
  textAlign:"center",
  border:"1px solid black",
  borderRadius:"1rem"
}
let styleBtn = {
  width:"10rem",
  height:"4rem",
  // backgroundColor:
  textAlign:"center",
  border:"1px solid black",
  borderRadius:"1rem"
}
class App extends Component{
  constructor(){
    super();
    this.state = {
     count:0,
     name:"",
     email:"",
     contact:""
    }
  }

  InsCount = () => {
    this.setState({count: this.state.count+1})
  }

  UpdateAll = (e) =>{
    this.setState({[e.target.name]:e.target.value})
    console.log(e.target.value)
  }

  render(){
    return(
      <>
        <div className="count p-5 mt-2">
          <h4>Count:{this.state.count}</h4>
          <input type="text" name="btn1 btn1-primary" value="Cilck" style={styleSubmit} onClick={this.InsCount}/><br/><br/>

          <input type="text" name="name" value={this.state.name} style={styleBtn} onChange={(e)=>this.UpdateAll(e)}/><br/><br/>
          <input type="text" name="email" value={this.state.email} style={styleBtn} onChange={(e)=>this.UpdateAll(e)}/><br/><br/>
          <input type="text" name="contact" value={this.state.contact} style={styleBtn} onChange={(e)=>this.UpdateAll(e)}/><br/><br/>

          <input type="button" name="btn1 btn1-primary" value="Cilck" style={styleSubmit} onClick={this.InsCount}/>
        </div>
      </>
    )
  }
}
export default App;