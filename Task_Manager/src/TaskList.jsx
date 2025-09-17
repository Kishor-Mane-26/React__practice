import React,{Component} from "react";
import ReactDom from "react-dom";

let listCss = {
    width:"500px",
    minHeight:" 200px",
    marginLeft:"380px",
    marginTop:"50px",
    backgroundColor:"#96A78D",
    textAlign:"center",
    padding:"20px",
    borderRadius:"20px"
}
export default class TaskList extends Component{
    render(){
        return(<>
            
            <div className="list" style={listCss}>
                <h1>Task_List</h1>

                {
                    this.props.tasks.length===0?(<h4>Task not Added...</h4>):
                    (<table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Task No.</th>
                                <th>Task</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tasks.map((item,index) => (<tr>
                                <td>{(index+1)}</td>
                                <td>{item}</td>
                                <td><u><button>Update</button></u></td>
                                <td><u><button>Delete</button></u></td>
                            </tr>))}
                        </tbody>
                    </table>)                    
                }
            </div>
        </>)
    }
}