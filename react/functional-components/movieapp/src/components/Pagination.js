import React from 'react'

function Pagination(props) {
  let {totalPagesWaliMovie,moviesCount,cpage,setcpage}=props;
  let pagesArray=[];
  if(totalPagesWaliMovie){
  let noOfPages=Math.ceil(totalPagesWaliMovie.length/moviesCount);
  for(let i=1;i<=noOfPages;i++){
      pagesArray.push(i);
  }
}


  return (
    <>
    {pagesArray.map(function(pageNumber){
      let css=pageNumber==cpage?'hover:bg-red-500 text-black border-2 font-bold py-1 px-3 rounded bg-blue-500 text-white':'hover:bg-red-500 text-black border-2 font-bold py-1 px-3 rounded';
      return  <button className={css} key={pageNumber} onClick={()=>{
        setcpage(pageNumber);
      }}>
        {pageNumber}
        </button>

    })}
    </>
  )
}

export default Pagination;