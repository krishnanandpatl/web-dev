import React from 'react'
import { Contextmessag } from './Context';

function Gradchild() {
  let message=React.useContext(Contextmessag);
    console.log("rendered grandchild")
  return (<>
    <div> i am Gradchild</div>
    <div>Parent se {message}</div>
    </>
  )
}

export default Gradchild;