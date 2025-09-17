import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route,Link, NavLink} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

export default class App extends Component{
  render(){
    return(<>
      <BrowserRouter>
          <div className="navbar">
            <ul>
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>)
  }
}
