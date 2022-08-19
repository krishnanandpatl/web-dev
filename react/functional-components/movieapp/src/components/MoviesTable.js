import React from 'react'

function MoviesTable(props) {
    const [isLoaded,setLoad]=React.useState(true);
    const [content,setcontent]=React.useState("");

    //useEffect will run only one time after first execution of return statement
    React.useEffect(async function(){
        let response=await fetch('https://react-backend101.herokuapp.com/movies');
        response=await response.json();
        setLoad(false);
        setcontent(response);
    },[])
    
    let filteredContent;

    const deleteMovie=(tobeDeletedMovieId)=>{
        let restOfTheMovies = content.movies.filter((movie) => movie._id !== tobeDeletedMovieId);
    let newObject = { movies: restOfTheMovies };
    setcontent(newObject);
    }
    
    if(content.movies){ 
        filteredContent=content.movies;
        /////for searching
      if(props.searchText!=""){
        filteredContent=content.movies.filter((movie)=>{
            let lowerCaseTitle=movie.title.toLowerCase();
            let lowerCaseSearchText=props.searchText.toLowerCase();
            return lowerCaseTitle.includes(lowerCaseSearchText);
        })
    }
    ////for genres
        if(props.cGenre){
            filteredContent=filteredContent.filter(function(movie){
                return (movie.genre.name==props.cGenre);
            })
          }   
          //for number of movies
      filteredContent=filteredContent.slice(0,props.moviesCount);
    
    }
 
    
 return (
    <div>
        {isLoaded==true?<div className='font-bold'>Loading.....</div>:
        <table className='table-auto'>
            <thead>
                <tr>
                    <th className='px-2'>#</th>
                    <th className='px-2'>Title</th>
                    <th className='px-2'>Genre</th>
                    <th className='px-2'>Stock</th>
                    <th className='px-2'>Rating</th>
                    <th className='px-2'></th>
                </tr>
            </thead>
            <tbody>
                {filteredContent.map(function(movie,idx){
                    return <tr key={movie._id}>
                    <td className='px-2 text-center'>{idx+1}</td>
                    <td className='px-2 text-center'>{movie.title}</td>
                    <td className='px-2 text-center'>{movie.genre.name}</td>
                    <td className='px-2 text-center'>{movie.numberInStock}</td>
                    <td className='px-2 text-center'>{movie.dailyRentalRate}</td>
                    <td><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded' onClick={function(){
                        deleteMovie(movie._id);
                    }}>Delete</button></td>
                </tr>
                })}
            </tbody>
        </table>
        }
    </div>
  )
}

export default MoviesTable;