import React from 'react'
import "./NavBar.css";

function NavBar() {
  return (
    <div className='navBar'>
        <div className='navbutton'>
        <button className='movie'>Movies</button>
        <button className='login'>Login</button>
        </div>
    </div>
  )
}

export default NavBar