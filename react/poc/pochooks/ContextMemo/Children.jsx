import React from 'react'
import Gradchild from './Gradchild'

function Children() {
    console.log("rendered children")
  return (
    <div>
        <div>I am child</div>
        <Gradchild/>
    </div>
  )
}

export default Children