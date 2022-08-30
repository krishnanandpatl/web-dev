import React from 'react'
import Children from './Children'

function Parent() {
  
    console.log("rendered parent");
  return (
    <>
    <div>I am Parent</div>
        
        <Children/>
        </>
    
  )
}

export default React.memo(Parent);