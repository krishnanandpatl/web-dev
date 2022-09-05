import React from 'react';
import './feed.css';

function Feed() {
  return (
    <>
    <div className="header">
      <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
       alt="" className='insta_img'/>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGNF-mjrXy2Zw/profile-displayphoto-shrink_400_400/0/1658112351065?e=1668038400&v=beta&t=Knwb40daDDTNjuWCu7PFSchRqRNDdeWvI209AorO1oE"
       alt="" className='profile_img'/>
    </div>
    <div className="main_container">
        <div className="upload_conatiner">
        <i class="fa-solid fa-clapperboard movie_icon"></i>
        <div className='upload_text'>UPLOAD VIDEO</div>
        </div>
        <div className="reels_conatiner">Reels</div>
    </div>
    </>
  )
}

export default Feed