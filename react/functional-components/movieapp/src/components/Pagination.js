import React from 'react'

function Pagination(props) {
  let {content,moviesCount}=props;
  let pagesArray=[];
  if(content.movies){
  let noOfPages=Math.ceil(content.movies.length/moviesCount);
  for(let i=1;i<=noOfPages;i++){
      pagesArray.push(i);
  }
}
  return (
    <>
    {pagesArray.map(function(pageNumber){
      return  <button className='hover:bg-red-500 text-black border-2 font-bold py-1 px-3 rounded'>{pageNumber}</button>

    })}
    </>
  )
}

export default Pagination;