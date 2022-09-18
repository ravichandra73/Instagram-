import React from 'react'
import Header from '../Components/Header/Header'
import ProfilePic from '../Components/ProfilePic/ProfilePic'
import './MyProfile.css'
import { IoMdSettings } from "react-icons/io";
import Post from '../Components/Posts/Post';

const MyProfile = () => {
    let posts=0,followers=0,following=0
  return (
    <div className='myprofile-container'>
        <Header></Header>
        <div className='myprofile-sub-container'>
              <div className='myprofile-left'>
                <ProfilePic></ProfilePic>
              </div>
        <div className='myprofile-right'>
            <div className='myprofile-first-row'>
                <p className='myprofile-username'>Emma_Watson3</p>
                <button className='myprofile-edit-button '>Edit Profile</button>
                <IoMdSettings className='myprofile-username'></IoMdSettings>
            </div>
            <div className='myprofile-second-row'>
                <button className='myprofile-posts'><span>{posts}</span><span >posts</span></button>
                <button className='myprofile-followers'><span>{followers}</span><span >followers</span></button>
                <button className='myprofile-following'><span>{following}</span><span >following</span></button>
            </div>
            <div className='myprofile-third-row'>
                <h1>Emma Watson</h1>
            </div>
        </div>
        </div>
        <hr></hr>
        <h2 className='myprofile-myposts-header'>My Posts</h2>
        <hr></hr>
        <div className='myprofile-myposts'>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
    </div>
  )
}

export default MyProfile