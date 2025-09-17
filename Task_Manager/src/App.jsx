import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList"


export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      task:[]
    };
  }
  addTask = (taskName) => {
    this.setState({task:[...this.state.task,taskName]});
            console.log(this.state.task.length);

  }
  render(){
    return(<>
        <h1>Task Manager</h1>
        <TaskForm onAddTask={this.addTask}/>
        <TaskList tasks={this.state.task}/>
    </>)
  }
}