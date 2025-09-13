import React, { Component } from "react";

// let styleContainer = {
//   maxWidth:"30rem",
//   backgroundColor:"skyblue",
//   display: "flex",
//   justifyContent: "center", 
//   alignItems: "center",
//   gap:"1rem",
//   padding:"1rem",
//   borderRadius:"1rem"
// }
// let StyleInline = {
//   padding : "1rem",
//   maxWidth : "15rem",
//   backgroundColor : "aqua",
//   border: "0.1rem solid blue",
//   borderRadius: "1rem",
//   textAlign:"center"
// }

// export default class App extends Component{
//   render(){
//     return<>
//       <div className="container" style={styleContainer}>
//         <h1 style={StyleInline}>Hii</h1>
//         <h1 style={StyleInline}>Wel-come</h1>
//         <h1 style={StyleInline}>To</h1>
//         <h1 style={StyleInline}>India</h1>
//       </div>
//    </>
//   }

// }

export default class App extends Component{
  render(){
    return(
    <>
      <div className="container mt-5 mt-5 p-3 border rounded bg-dark">
        <div className="form-group p-2">
          <input type="text" name="name" className="form-control" value="" placeholder="Enter name"/>
        </div>
        <div className="form-group p-2">
          <input type="text" name="name" className="form-control" value="" placeholder="Enter name"/>
        </div>
        <div className="form-group p-2">
          <input type="text" name="name" className="form-control" value="" placeholder="Enter name"/>
        </div>
        <div className="form-group p-2">
          <input type="submit" name="s" className="form-control btn btn-primary" value="Register"/>
        </div>
      </div>
    </>
    )
  }
}