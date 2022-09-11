import React,{useReducer} from 'react'

//for simple work useState
//for complex work useReducer
function Reducer() {
  const initialState={
   value:0
  };
  const reducer=(state,action)=>{
    switch(action.type){
      case "incre":
         return state.value+1;
      case "decre":
         return state.value-1;
      case "ByFive":
         return state.value+5;
      default:
         return state.value;
    }
  }
  //dispatch contacts to reducer from which state changes
  let [countObj,dispatch]=useReducer(initialState,reducer);
  return (
   <div>
   <button onClick={dispatch({type:"incre"})}>+Increment</button>
   <span>   ({countObj.value})    </span>
   <button onClick={dispatch({type:"decre"})}>-Decrement</button>
   <button onClick={dispatch({type:"ByFive"})}>ByFive</button>
</div>
  )
}

export default Reducer;