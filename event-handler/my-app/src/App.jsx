import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
    return (
        <div>
          <h1>Hello React</h1>
          <Welcome/>
          <Greetings name = "Kishor"/>
          <Greetings name = "Pratik"/>
          <Counters/>
          <Button/>
          <ListKey/>
          <User isLoggedIn={true}/>
        </div>
    )
}

function Welcome () {
    return <h3>Welcome to react</h3>;
}

function Greetings(props){
    return <h5>Hello,{props.name}.....</h5>
}

function Counters(){
    const[count,setCount] = useState(0);
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count+1)}>Increase Count</button>
            <button onClick={() => setCount(count-1)}>Decrease Count</button>
        </div>
    )
}



export default App

function  Button () {
    function EventHandeling () {
        alert("Button was clicked");
    }
    return <button onClick={EventHandeling}>Click</button>
}

function ListKey () {
    const fruits = ["Apple","Orange","Mango"];
    return (
        <ul>
            {fruits.map((fruit,index) => (
                <li key={index}>{fruit}</li>
        ))}
        </ul>
    );
}

function User ({ isLoggedIn }) {
    return(
        <div>
            {isLoggedIn ? <h2>Welcome Back</h2> : <h2>Please Login</h2>}
        </div>
    )
}