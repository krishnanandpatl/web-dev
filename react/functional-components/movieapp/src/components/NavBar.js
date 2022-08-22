import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className='p-4 bg-black'>
      
        <Link to='/home'><button className='leading-tight text-3x1 text-white inline-block mr-4 font-extrabold'>IMDB</button></Link>
        <Link to="/login"><button className='font-medium text-blue-500 text-x1 hover:text-blue-400'>Login</button></Link>
      
    </div>
  )
}

export default NavBar