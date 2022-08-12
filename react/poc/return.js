import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Print(abc){
  return <h1>Hello to {abc.name} and you are {abc.age} yrs old</h1>
}

function names(){
  return <>
  <Print name="patel" age={22}></Print>
  <Print name="sinha" age={23}></Print>
  <Print name="singh" age={24}></Print>
  <Print name="idk" age={99}></Print>
  </>
}

ReactDOM.render(
  <names></names>,
  document.getElementById('root')
);