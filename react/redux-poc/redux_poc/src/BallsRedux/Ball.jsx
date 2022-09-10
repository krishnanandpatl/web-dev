import React from 'react';
import { connect } from 'react-redux'

function Ball(prop) {
  return (
    <>
    <h1>Balls</h1>
    <h2>No. of balls: {prop.balls}</h2>
    <button onClick={prop.buyBall}>+</button>
    <button onClick={prop.sellBall}>-</button>
    </>
  )
}

const mapStateToProps=(store)=>{
  return store;
}
const mapDispatchToProps=(dispatch)=>{
  return{
    sellBall:()=>{dispatch({type:"decre"})},
    buyBall:()=>{dispatch({type:"incre"})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball);