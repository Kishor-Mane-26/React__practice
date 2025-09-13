import React from "react";

class Heading extends React.Component{
    render(){
        return <>
            <div className="container">
                 <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                 </ul>
            </div>
        </>
    }
}

export default Heading;