import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color:'cyan'}}>
         booooooooooooooo!
        </p>
        
        <Counter></Counter>
        <Users></Users>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Person(props){
  return (<div style={{border:'2px solid yellow',margin:'10px',padding:'10px'}}>
  <h1>Name: {props.name}</h1>
<h3>Status: {props.status}</h3>
  </div>
  )

}
function Counter(){
  const[count,setCount]=useState(10);
  const handleIncrease=()=>{
  const newCount =count+1;
  setCount(newCount);
  };
  const handleDecrease =()=>{
    setCount(count-1);
  };
  return(
    <div>
      <h1>Count: {count} </h1>
      <button style={{color:'red',backgroundColor:'cyan'}} onClick={handleDecrease} >Decrease</button>
      <button style={{color:'red',backgroundColor:'cyan'}} onClick={handleIncrease}>Increase</button>
    </div>
  )
}
  function Users(){
    const[users,setUsers] =useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response=>response.json())
      .then(data=>setUsers(data));
    })
    return(
      <div>
        <h1>Users: {users.length}</h1>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }


export default App;
