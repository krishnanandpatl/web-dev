import './App.css';
import React,{useState} from 'react'


function App() {
  let [list,setList]=useState([]);
 const handleDelete=function(idx){
  let dd=[...list];
  dd.splice(idx,1);
  setList(dd);
 }

  return (
    <>
    <div>Todo Example</div>
    <InputBox setList={setList} list={list}/>
    <TaskList tasks={list} handleDelete={handleDelete}/>
    </>
  );
}
function InputBox(props){
  let [task,setTask]=useState("");
  const handleChange=function(e){
      setTask(e.target.value);
  }
  const handleTask=function(){
    let newlist=[...props.list];
    newlist.push(task);
    props.setList(newlist);
  }
   return(
    <>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleTask}>Add task</button>
    </>
   );
}
function TaskList(props){
  let {tasks,handleDelete}=props;
  
  return(
    <div>
      {
        tasks.map(function(task,idx){
          return (
            <>
          <li key={idx}>{task}</li>
          <button onClick={()=>{handleDelete(idx)}}>Delete</button>
          </>
          )
        })
      }
    </div>
  )
}

export default App;