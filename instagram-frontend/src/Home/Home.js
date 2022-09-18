import React from 'react'
import { TiCameraOutline,TiMessages } from "react-icons/ti";
import Header from '../Components/Header/Header';
import Post from '../Components/Posts/Post';
import './Home.css'


const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-header'>
            <Header></Header>
        </div>
        <div className='home-all-posts'>
              <Post></Post>
              <Post></Post>
        </div>
    </div>
  )
}

export default Home