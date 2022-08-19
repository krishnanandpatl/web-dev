import React from 'react'
import './Genre.css'
//import GenreList from './GenreList';

function Genre() {
  const [isLoadedG,setLoadG]=React.useState(true);
  const [genreList,setgenreList]=React.useState("");
  React.useEffect(async function(){
       let response=await fetch("https://react-backend101.herokuapp.com/genres");
       response=await response.json();
       setLoadG(false);
       setgenreList(response.genres);
  },[])
  return (
    <div className='genre'>
    <div className='border-2 h-10 text-center font-bold'>All Genre</div>
    {isLoadedG==true?<div>Loading.......</div>:
    <div>
        {genreList.map(function(genre){
          return <div className="border-2 text-center h-10 border-t-0 font-bold">{genre.name}</div>
        })

        }  
    </div>}
    </div>
  )
}

export default Genre;