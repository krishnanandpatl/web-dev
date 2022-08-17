import React from 'react';
import './MainWind.css';
import Genre from './Genre';
import Movies from './Movies';

function MainWind() {
  return (
    <div className='mainwind'>
       <Genre/>
       <Movies/>
    </div>
  )
}

export default MainWind;