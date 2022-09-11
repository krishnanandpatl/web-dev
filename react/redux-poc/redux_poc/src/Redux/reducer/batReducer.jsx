let initialstate={
    bat: 10,
    value:""
  }
  function batReducer(state=initialstate,action){
    switch(action.type){
      case "sell_bat":
        if(state.bat-state.value<0){
          return{
            ...state,
            value:""
          }
        }  
        return{
          bat:state.bat-state.value,
          value:""
        }
      case "buy_bat":
        return{
          bat:state.bat+Number(state.value),
          value:""
        }
      case "set_value":
        return{
          bat:state.bat,
          value:action.payload
        }
      default:
        return state;
      }
  }
  export default batReducer;