import React from 'react'

function Pagination() {
  return (
    <div>
        <button className='bg-blue-500 text-white font-bold py-1 px-3 rounded'>1</button>
        <button className='hover:bg-red-500 text-black border-2 font-bold py-1 px-3 rounded'>2</button>
        <button className='hover:bg-red-500 text-black border-2 font-bold py-1 px-3 rounded'>3</button>
    </div>
  )
}

export default Pagination;