import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Addtask(){
  return <form>
        <input type="text" value=""></input>
        <input type="button" value="Add Task"></input>
    </form>
}

function Tasklist(props){

  return <div className={props.purpose}>
  <div className="list-container">
  <div className="title">{props.task}</div>
  <div className='content'>
      
  </div>
  </div>
</div>
}

function App(){

  return <div>
  <div className='add-task'><Addtask></Addtask></div>
  <div className='task-lists'>
    <Tasklist purpose="todo" task="Todo"></Tasklist>
    <Tasklist purpose="finished" task="Finished"></Tasklist>
  </div>
  </div>

}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);