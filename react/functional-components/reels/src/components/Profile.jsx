import React from 'react'
import './profile.css';

function Profile() {
  return (
    <>
    <div className='header'></div>
    <div className="main">
      <div className="pimg_container">
         <img src="http://via.placeholder.com/640x360" alt="Profile" className="pimg" />

      </div>
      <div className="details">
        <div className="content">Krishna</div>
        <div className='content'>No. of Post: <span className="bold_text">Posts</span></div>
        <div className="content">Email <span className="bold_text">@ddd.com</span></div>
      </div>
    </div>
    </>
  )
}

export default Profile