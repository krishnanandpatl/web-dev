import React, { useState } from 'react';
import './Reset.css';

function Reset(props) {
  const resetParentCounter=props.resetParentCounter;
  const [countNumberVal,setCountNumberVal]=useState("");
  const [countVal,setCountVal]=useState("");

const setInput1=(e)=>{
    setCountNumberVal(e.target.value);
}
const setInput2=(e)=>{
  setCountVal(e.target.value);
}

const resetCounter=()=>{
  console.log("Counter Number "+ countNumberVal);
  console.log("value "+countVal);
  resetParentCounter(countNumberVal,countVal);
}

  return (
    <div id="top">
                <div id="cn">
                       <p>Counter number :</p>
                       <input value={countNumberVal} onChange={setInput1}></input>
                </div>
                <div id="no">
                       <p>Number :</p>
                       <input value={countVal} onChange={setInput2}></input>
                </div>
                <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default Reset;