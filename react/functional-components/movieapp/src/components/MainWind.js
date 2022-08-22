import React from 'react';
import Genre from './Genre';
import Movies from './Movies';

function MainWind() {
  const [cGenre,setGenre]=React.useState("");
  const [cpage,setcpage]=React.useState(1);

  const setGlobalGenre=(nGenre)=>{
    if(nGenre=='All Genre'){
      setGenre('');
      
    }else{
    setGenre(nGenre);
    setcpage(1);
    }
    setcpage(1);
  }
  
  return (
    <div className='mainwind flex'>
       <Genre setGlobalGenre={setGlobalGenre} />
       <Movies cGenre={cGenre} cpage={cpage} setcpage={setcpage}/>
    </div>
  )
}

export default MainWind;