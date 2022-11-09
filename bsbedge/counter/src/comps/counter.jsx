import React,{useState} from 'react'
import './counter.css'

function Counter() {
    let [count,setCount]=useState(0);
  return (
    <>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    <div className='main'>{count}</div>
    <button onClick={()=>{setCount(count-1)}}>-</button>
    </>
  )
}

export default Counter