import React,{useEffect,useState} from 'react'
import axios from 'axios';

function Fetched() {
    let [content,setContent]=useState([]);
    useEffect(()=>{
        (async ()=>{
        let res=await axios.get("https://jsonplaceholder.typicode.com/users");
        setContent(res.data);
        })();
    },[])
  return (
    <>
       {content.map((data)=>{
        return <ul><li key={data.id}>{data.name}</li></ul>
       })}
    </>
  )
}

export default Fetched