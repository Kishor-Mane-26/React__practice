import React, { Component } from "react";
import ReactDOM from "react-dom";

let containerCss = {
    width:"500px",
    minHeight:" 200px",
    marginLeft:"380px",
    backgroundColor:"#96A78D",
    textAlign:"center",
    padding:"20px",
    borderRadius:"20px"
}
 let InputCss = {
        width:"200px",
        height:"30px",
        textAlign:"center",
        border:"0.5px solid black",
        borderRadius:"3px",
        marginRight:"10px"
}

let SubmitCss = {
    width:"100px",
    height:"32px",
    border:"0.5px solid black",
    borderRadius:"3px"
}

export default class TaskFrom extends Component{
    constructor(props){
        super(props);
        this.state={
            input:""
        };
    }

    inputData = (e) => {
        this.setState({input:e.target.value});
    }

    handelSubmit = (e) => {
        e.preventDefault();
        if(this.state.input.lenght!=0){
            this.props.onAddTask(this.state.input);
        }
    }
    render(){
        return(<>
            <div className="container" style={containerCss}>
                <h1>Task_From</h1>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" name="input" placeholder="Enter text"
                     value={this.state.input} style={InputCss}
                     onChange={(e)=>this.inputData(e)} 
                    />

                    <input type="submit" name="submit" value="+ New Task" style={SubmitCss}/>
                </form>
            </div>
        </>)
    }
}