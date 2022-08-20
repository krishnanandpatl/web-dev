import React from 'react'
import './Movies.css';
import InputBox from './InputBox';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';

function Movies(props) {
    let [searchText,setsearchText]=React.useState("");
    let [moviesCount,setCount]=React.useState(3);
    const [isLoaded,setLoad]=React.useState(true);
    const [content,setcontent]=React.useState("");
    const [cpage,setcpage]=React.useState(1);

    const setGlobalSearchText=(searchText)=>{
      setsearchText(searchText);
    }
    const setGlobalCount=(moviesCount)=>{
      setCount(moviesCount);
    } 
      //useEffect will run only one time after first execution of return statement
      React.useEffect(async function(){
        let response=await fetch('https://react-backend101.herokuapp.com/movies');
        response=await response.json();
        setLoad(false);
        setcontent(response);
    },[])
  return (
    <div className='movies'>
      <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalCount={setGlobalCount}/>
      <MoviesTable searchText={searchText} moviesCount={moviesCount} cGenre={props.cGenre}
      isLoaded={isLoaded} content={content} setcontent={setcontent} cpage={cpage}/>
      <Pagination content={content} moviesCount={moviesCount}/>
    </div>
  )
}

export default Movies