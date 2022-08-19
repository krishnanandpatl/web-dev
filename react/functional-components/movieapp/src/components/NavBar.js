import React from 'react'

function NavBar() {
  return (
    <div className='p-4 bg-black'>
        <button className='leading-tight text-3x1 text-white inline-block mr-4 font-extrabold'>IMDB</button>
        <button className='font-medium text-blue-500 text-x1 hover:text-blue-400'>Login</button>
    </div>
  )
}

export default NavBar