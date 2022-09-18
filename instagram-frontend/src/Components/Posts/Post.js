import React from 'react'
import './Post.css'
import { FiHeart,FiMessageCircle,FiSend} from "react-icons/fi";
import { CgAlbum,CgMore } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

const Post = ({props}) => {
  return (
    <div className='posts-container'>
      <br />
      <div className='post-first-part-profile'>
          <img className='post-profile-img' src="https://static.wikia.nocookie.net/littlewomen/images/a/ac/Emmawatson.png" 
           alt="emma watson" />
           <p className='post-profile-name'>Emma_Watson</p>
           <p className='post-profile-options'><CgMore></CgMore></p>
      </div>
        <img className='post-second-part-post-img' src="https://media.vogue.co.uk/photos/5dbaf666118a790008efdb91/2:3/w_1920,c_limit/EMMA%20WATSON%20DEC19.jpg" alt="emma watson collab with vogue" />
      <div className='post-third-part-reactions'>
            <div className='post-reaction-three'>
              <FiHeart className='post-reactions-size'></FiHeart>
              <FiMessageCircle className='post-reactions-size'></FiMessageCircle>
              <FiSend className='post-reactions-size'></FiSend>
            </div>
            <div className='post-reaction-empty'></div>
            <div className='post-reaction-save'>
              <CgAlbum className='post-reactions-size'></CgAlbum>
            </div>
      </div>
      <h3>12,235,694 likes</h3>
      <br />
      <span>
      <strong id='post-profile-name' >Emma Watson</strong>
      <small className='post-description'>thank you VOGUE</small>
      </span>
      <br></br>
      <p>uploaded 9min ago</p>
      <br />
      <hr />
      <div className='post-comment-part'>
        <button className='post-comment-emoji'>😀</button>
        <input className='post-comment' type='string' name='post-comment' value='Add a comment'/>
        <button className='post-comment-post'>Post</button>
        
      </div>
    </div>
  )
}

export default Post