import React from 'react';
import Genre from './Genre';
import Movies from './Movies';

function MainWind() {
  const [cGenre,setGenre]=React.useState("");

  const setGlobalGenre=(nGenre)=>{
    if(nGenre=='All Genre'){
      setGenre('');
    }else{
    setGenre(nGenre);
    }
  }
  
  return (
    <div className='mainwind flex'>
       <Genre setGlobalGenre={setGlobalGenre}/>
       <Movies cGenre={cGenre}/>
    </div>
  )
}

export default MainWind;