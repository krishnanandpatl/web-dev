import React from 'react'
import './Movies.css'

function Movies() {
  return (
    <div className='movies'>
      <InputBox/>
      <MoviesTable/>
      <Pagination/>
    </div>
  )
}

export default Movies