import React from 'react'
import { Route,routes } from 'react-router-dom'
import './SignUp.css'
import { NavLink } from 'react-router-dom'




const SignUp = () => {
  return (
    <div className='signup-container'>
      <div className='signup-empty'></div>
         <div className='signup-div'>
               <div> <img className='signup-insta-img' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram" /> </div>
               <p className='signup-text'>Sign up to see photos and videos from your friends.</p>
               <br />
                <button id='signup-fb-connect'>Log in with facebook</button>
                <br />
                <input className='signup-inputs' value="email" name='sign-up-email' type='string'/>
                <br />
                <input className='signup-inputs' value="name" name='sign-up-name' type='string'/>
                <br />
                <input className='signup-inputs' value="password" name='sign-up-password' type='string'/>
                <br />
                <input className='signup-inputs' value="phoneNumber" name='sign-up-Number' type='string'/>
                <br />
                <br />
                <p className='signup-text-extra'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                <br />
                <p className='signup-text-extra'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                <br />
                <button id='signup-fb-connect'>Sign UP</button>
         </div>
         <br />
         <div className='signup-extra-container'>
          <br></br>
              <p className='signup-text'>Have an account? <span className='signup-blue'>login</span></p>
              <br />
         </div>
    </div>
  )
}

export default SignUp