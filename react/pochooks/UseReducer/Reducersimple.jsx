import React,{useReducer} from 'react'

//for simple state useState
//for complex state useReducer
function Reducer() {
  const initialState=0;
  const reducer=(state,action)=>{
    switch(action){
      case "incre":
         return state+1;
      case "decre":
         return state-1;
      case "ByFive":
         return state+5;
      default:
         return state;
    }
  }
  //dispatch contacts to reducer from which state changes
  let [count,dispatch]=useReducer(initialState,reducer);
  return (
   <div>
   <button onClick={dispatch("incre")}>+Increment</button>
   <span>   ({count})    </span>
   <button onClick={dispatch("decre")}>-Decrement</button>
   <button onClick={dispatch("ByFive")}>ByFive</button>
</div>
  )
}

export default Reducer;
//dispatch is the function which will run reducer with initialstate and action too