import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      query:"",
      items:[
        "Apple",
        "Banana",
        "Orange",
        "Pineapple"
      ]
    }
  }

  handelChange = (e) => {
     this.setState({query:e.target.value})
  }

  filterData = () => {
    let {query,items} = this.state;
    return items.filter(item=>item.toLowerCase().includes(query.toLowerCase()))
  }
  render(){
    let FilterData = this.filterData();
    return(<>
      <div className="container bg-info p-5">
        <div className="form-group">
          <input type="text" name="name" value={this.state.query} className="form-control" onChange={(e) => this.handelChange(e)}/>
        </div>
        <div className="conatiner1">
          <ul className="list-group">
            {
              FilterData.length>0?(FilterData.map((item,index)=><li key={index} className="list-group-item">{item}</li>)):(<h4>No Data Found</h4>)
            }
          </ul>
        </div>
      </div>
    </>)
  }
}