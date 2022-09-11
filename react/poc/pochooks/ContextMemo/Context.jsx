import React,{useState} from 'react'
import Parent from './Parent';
export let Contextmessag=React.createContext();


function Context() {
    let [v,setv]=useState("no click");
    console.log("rendered context");
    const handle=function(){
        setv("hello");
      }
  return (<>
    <div>Context memo</div>
    <button onClick={handle}>change</button>
    <Contextmessag.Provider value={v}>

    <Parent></Parent>
    </Contextmessag.Provider>

    </>
  )
}

export default Context;