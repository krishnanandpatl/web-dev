import React from 'react';
import {connect} from 'react-redux';

function Bat(props) {
  return (
    <>
    <h1>Bat</h1>
    <h2>Number of Bat :{props.bat}</h2>
    <input type="text" value={props.value} onChange={(e)=>{
        let value=e.target.value;
        props.set_value(value);
    }}/>
    <button onClick={props.sell_bat}>Sell</button>
    <button onClick={props.buy_bat}>Buy</button>
    </>
  )
}
const storeToprops=(store)=>{
    return store;
}
const dispatcToStore=(dispatch)=>{
return {
sell_bat:()=>{dispatch({type:"sell_bat"})},
buy_bat:()=>{dispatch({type:"buy_bat"})},
set_value:(value)=>{dispatch({
    type:"set_value",
    payload:value
})}
}
}

export default connect(storeToprops,dispatcToStore)(Bat);