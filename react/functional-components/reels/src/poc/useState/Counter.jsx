import React,{useState} from 'react'

function Counter() {
    let [count,setCount]=useState(0);
    const Incre=()=>{
        setCount(count+1);
    }
    const Decre=()=>{
        setCount(count-1);
    }
    const ByFive=()=>{
        // for(let i=1;i<=5;i++){
        //     setCount(count+1);
        // } rendering becomes slow code runs faster so
        for(let i=1;i<=5;i++){
            setCount((count)=>{
                return count+1;  ////use this state eveytime you change the state
            });
        }
    }
  return (
    <div>
        <button onClick={Incre}>+Increment</button>
        <span>   ({count})    </span>
        <button onClick={Decre}>-Decrement</button>
        <button onClick={ByFive}>    Increase5   </button>
    </div>
  )
}

export default Counter;