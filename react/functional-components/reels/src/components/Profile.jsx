import React, { useState } from 'react';
import './profile.css';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext'

function Profile() {
  let cUser=useContext(AuthContext);
  return (
    <>
    {
      cUser==null?<h1>Please login.</h1>:
    <>
    <div className='header'></div>
    <div className="main">
      <div className="pimg_container">
         <img src="http://via.placeholder.com/640x360" alt="Profile" className="pimg" />

      </div>
      <div className="details">
        <div className="content">Krishna Nand Patel</div>
        <div className='content'>No. of Post: <span className="bold_text">Posts</span></div>
        <div className="content">Email <span className="bold_text">@ddd.com</span></div>
      </div>
    </div>
    </>
  }
  </>
  )
}

export default Profile