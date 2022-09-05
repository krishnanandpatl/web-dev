import React, { useState } from 'react';
import './profile.css';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext'
import { useEffect } from 'react';
import { async } from '@firebase/util';
import {db} from '../firebase';
import {doc,getDoc} from 'firebase/firestore';

function Profile() {
  let cUser=useContext(AuthContext);
let [user,setUser]=useState();
let [pageLoading,setPageLoading]=useState(true);

useEffect(function fun(){
  (
    async function(){
      //get user
      const docRef=doc(db,"users",cUser.uid);
      let userObj=await getDoc(docRef);
    
      //setUser
      setUser(userObj.data());
      //setpageloading
      setPageLoading(false);
    }
  )()
},[]);

  return (
    <>
    {pageLoading==true?<div>...Loading.....</div>:
    <>
    <div className='header'></div>
    <div className="main">
      <div className="pimg_container">
         <img src={user.profileImgUrl} alt="Profile" className="pimg" />

      </div>
      <div className="details">
        <div className="content">{user.name}</div>
        <div className='content'>No. of Post: {user.reelsIds.length}<span className="bold_text"> Posts</span></div>
        <div className="content">{user.email} <span className="bold_text">@ddd.com</span></div>
      </div>
    </div>
    </>}
    </>
  )
}

export default Profile