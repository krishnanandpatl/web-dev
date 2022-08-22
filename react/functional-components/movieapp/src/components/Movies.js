import React,{useEffect} from 'react'
import './Movies.css';
import InputBox from './InputBox';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';

function Movies(props) {
    let [searchText,setsearchText]=React.useState("");
    let [moviesCount,setCount]=React.useState(3);
    const [isLoaded,setLoad]=React.useState(true);
    const [content,setcontent]=React.useState("");
    let {cpage,setcpage}=props;

    const setGlobalSearchText=(searchText)=>{
      setsearchText(searchText);
      setcpage(1);
    }
    const setGlobalCount=(moviesCount)=>{
      setCount(moviesCount);
      setcpage(1);
    } 

    
    let filteredContent;
    let totalPagesWaliMovie;
    if(content.movies){ 
      filteredContent=content.movies;
      /////for searching
    if(props.searchText!=""){
      filteredContent=content.movies.filter((movie)=>{
          let lowerCaseTitle=movie.title.toLowerCase();
          let lowerCaseSearchText=searchText.toLowerCase();
          return lowerCaseTitle.includes(lowerCaseSearchText);
      })
  }
  ////for genres
      if(props.cGenre){
          filteredContent=filteredContent.filter(function(movie){
              return (movie.genre.name==props.cGenre);
          })
        }   
        totalPagesWaliMovie=filteredContent;
      let sidx=(cpage-1)*moviesCount;
      let eidx=sidx+parseInt(moviesCount);
        //for number of movies
    filteredContent=filteredContent.slice(sidx,eidx);
  
  }

      //useEffect will run only one time after first execution of return statement
      useEffect(function(){
        async function fn(){
          let response=await fetch('https://react-backend101.herokuapp.com/movies');
          response=await response.json();
          setLoad(false);
          setcontent(response);
      }fn();
      }
        ,[])
  return (
    <div className='movies'>
      <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalCount={setGlobalCount}/>
      <MoviesTable searchText={searchText} filteredContent={filteredContent} cGenre={props.cGenre}
      isLoaded={isLoaded} content={content} setcontent={setcontent} cpage={cpage}/>
      <Pagination totalPagesWaliMovie={totalPagesWaliMovie} moviesCount={moviesCount} cpage={cpage} setcpage={setcpage}/>
    </div>
  )
}

export default Movies