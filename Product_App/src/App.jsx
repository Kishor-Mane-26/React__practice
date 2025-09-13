import React from "react";
import ReactDom from "react-dom";

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      products : [
                    {id:1,name:'Abc',price:1000},
                    {id:2,name:'Def',price:1000},
                    {id:3,name:'Pqr',price:1000},
                    {id:4,name:'Xyz',price:1000}
                ],
      cart : []
    }
  }

  addToCart(product){
    this.setState((prevState) => ({
      cart : [...prevState.cart,product]
    }))
  }

  getTotal(){
    return this.state.cart.reduce((total,item)=>total+item.price,0);
  }
  render(){
    return(<>
      <div className="conatiner bg-info p-5">
        <h1>Product List</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>Product Id.</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Add To Cart</th>
          </tr>
        </thead>
        <tbody>
          {
          this.state.products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><button className="btn btn-success" onClick={()=>this.addToCart(product)}>Add To Cart</button></td>
            </tr>
          ))
        }
        </tbody>
        </table>
        <h1>Cart</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product Id.</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.cart.map((product) => (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <h3>Total Bill {this.getTotal()}</h3>
      </div>
    </>)
  }
}