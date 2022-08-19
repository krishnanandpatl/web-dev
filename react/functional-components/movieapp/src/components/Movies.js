import React from 'react'
import './Movies.css';
import InputBox from './InputBox';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';

function Movies(props) {
    let [searchText,setsearchText]=React.useState("");
    let [moviesCount,setCount]=React.useState(9);

    const setGlobalSearchText=(searchText)=>{
      setsearchText(searchText);
    }
    const setGlobalCount=(moviesCount)=>{
      setCount(moviesCount);
    } 
  return (
    <div className='movies'>
      <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalCount={setGlobalCount}/>
      <MoviesTable searchText={searchText} moviesCount={moviesCount} cGenre={props.cGenre}/>
      <Pagination/>
    </div>
  )
}

export default Movies