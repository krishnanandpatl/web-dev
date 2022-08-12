import React,{useState} from 'react';
//use state is called hook
import ReactDOM from 'react-dom';
import './index.css';

function Counterfn(){

    //count use the initial state i.e. 0
    //updatecount this updates the  state
  let [count,updateCount]=useState(0);
  const increment=()=>{
    updateCount(count+1);
  }
  const decrement=()=>{
    updateCount(count-1);
  }
  return <>
  <button onClick={increment}>+</button>
  <p>{count}</p>
  <button onClick={decrement}>-</button>
  </>

}

ReactDOM.render(
  <Counterfn></Counterfn>,
  document.getElementById('root')
);