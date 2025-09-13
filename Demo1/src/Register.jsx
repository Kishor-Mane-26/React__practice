import React,{Component} from "react";

export default class Reg extends Component {
  render() {
    return (
      <div className="reg-container">
        <input type="text" placeholder="Enter Name" /><br /><br />
        <input type="text" placeholder="Enter Email" /><br /><br />
        <input type="text" placeholder="Enter Contact" /><br /><br />
        <input type="text" placeholder="Enter Address" /><br /><br />
        <input type="submit" value="Register" className="btn" />
      </div>
    );
  }
}
