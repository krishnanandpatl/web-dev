import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component{
   state={
    count:0
   }
   incrementCount=()=>{
    this.setState({
      count:this.state.count+1
    })
   }
   decrementCount=()=>{
    this.setState({
      count:this.state.count-1
    })
   }
   render(){
    
    return(
    <>
    <button onClick={this.incrementCount}>+</button>
    <p>{this.state.count}</p>
    <button onClick={this.decrementCount}>-</button>
    </>
    )

   }
}

ReactDOM.render(
  <Counter></Counter>,
  document.getElementById('root')
);