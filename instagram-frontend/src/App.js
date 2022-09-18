import React from 'react';
import './App.css';
import {Routes,Route } from "react-router-dom"
import SignUp from './Signup/SignUp.js';
import LogIn from './LogIn/LogIn';
import ProfilePic from './Components/ProfilePic/ProfilePic';
import Home from './Home/Home';
import Header from './Components/Header/Header';
import MyProfile from './MyProfile/MyProfile';
import Post from './Components/Posts/Post';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<><ProfilePic></ProfilePic></>}></Route>
      <Route path='/post' element={<><Post></Post></>}></Route>
      <Route path='/signup' element={<><SignUp/></>}></Route>
      <Route path='/login' element={<><LogIn></LogIn></>}></Route>
      <Route path='/home' element={<><Home></Home></>}></Route>
      <Route path='/myprofile' element={<><MyProfile></MyProfile></>}></Route>
    </Routes>
    </div>
  );
}

export default App;
