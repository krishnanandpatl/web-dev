import React,{useEffect} from 'react'
import './Genre.css'
//import GenreList from './GenreList';

function Genre(props) {
  const [isLoadedG,setLoadG]=React.useState(true);
  const [genreList,setgenreList]=React.useState("");
  
useEffect(function(){
  (async function(){
    let response=await fetch("https://react-backend101.herokuapp.com/genres");
    response=await response.json();
    setLoadG(false);
    setgenreList(response.genres);
})();
}
  ,[])

  const handleGenre=(e)=>{
    props.setGlobalGenre(e.target.innerText);
  }
  
  return (
    <div className='genre'>
    <div className='border-2 h-10 text-center font-bold cursor-pointer' onClick={handleGenre}>All Genre</div>
    {isLoadedG==true?<div>Loading.......</div>:
    <div>
        {genreList.map(function(genre){
          return <div key={genre._id} onClick={handleGenre} value={genre.name} className="border-2 text-center h-10 border-t-0 font-bold cursor-pointer">{genre.name}</div>
        })

        }  
    </div>}
    </div>
  )
}

export default Genre;