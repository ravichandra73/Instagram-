import React from 'react'
import { Route,routes } from 'react-router-dom'
import './LogIn.css'
import { NavLink } from 'react-router-dom'

const LogIn = () => {
  return (
    <div className='login-container'>
      <div className='login-empty'></div>
         <div className='login-div'>
               <div> <img className='login-insta-img' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram" /> </div>
                <input className='login-inputs' value="email" name='login-email' type='string'/>
                <br />
                <input className='login-inputs' value="password" name='login-password' type='string'/>
                <br />
                <br />
             <NavLink> <button id='login-fb-connect'>Login</button></NavLink>   
                <br />
                <br />
                <legend>OR</legend>
                <br />
                <br />
                <NavLink><button id='login-fb-connect'>Log in with facebook</button></NavLink>
                <br />
                <br></br>
                <NavLink><p className='login-text-extra'>forgot password?</p></NavLink>
                
         </div>
         <br />
         <div className='login-extra-container'>
              <br/>
              <p className='login-text'>Don't have an account? <NavLink><span className='login-blue'>SignUp</span></NavLink></p>
              <br />
         </div>
    </div>
  )
}

export default LogIn