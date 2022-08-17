import React,{useState} from 'react'
import './Counter.css'

function Counter(props) {
    let [count,updateCount]=useState(0);
    let number=props.value;

    if (number == props.resetCounterNum &&
      count != props.resetCounterValue) {
      updateCount(props.resetCounterValue);
      // reset apna counter
      props.resetParentProps();
  }

    const increment=()=>{
      updateCount(count+1);
    }
    const decrement=()=>{
      updateCount(count-1);
    }
  return (
    <div id="counter">
                <h3>Counter Number {number}</h3>
                <button onClick={increment}>+</button>
                <p>{count}</p>
                <button onClick={decrement}>-</button>
                </div>
  )
}

export default Counter;