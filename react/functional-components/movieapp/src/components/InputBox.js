import React,{useState} from 'react';

function InputBox(props) {
    let [searchText,setSearchText]=useState("");
    let [numberofItems,setNumberofItems]=useState(3);
    const handleText=(e)=>{
        setSearchText(e.target.value);
        props.setGlobalSearchText(e.target.value);
    }
    const handleCount=(e)=>{
        setNumberofItems(e.target.value);
        props.setGlobalCount(e.target.value);
    }
  return (
    <>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>New</button>
    <input className='border rounded py-1 px-3 mx-2 font-bold' type='text' onChange={handleText} value={searchText}></input>
    <input className='border rounded py-1 px-1' type='number' onChange={handleCount} value={numberofItems}></input>
    </>
  )
}

export default InputBox;