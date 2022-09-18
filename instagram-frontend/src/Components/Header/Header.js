import React from 'react'
import { IoIosAddCircle,IoIosHome,IoMdHeartEmpty,IoMdText,IoIosContact, IoIosAdd } from "react-icons/io";
import { FaSearch} from "react-icons/fa";
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
    <div className='header-sub-container'>
        <div className='header-insta-pic'>
        <img className='signup-insta-img' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram" /> 
        </div>
        <div className='header-searchbar'>
            <h1 className='search-icon'><FaSearch></FaSearch></h1>
            <input className='search-input-bar' type="text" value="search" />
        </div>
        <div className='header-nav-icons'>
          <NavLink><h1 ><IoIosHome></IoIosHome></h1></NavLink>
          <NavLink><h1><IoMdText></IoMdText></h1></NavLink>
          <NavLink><h1><IoIosAddCircle></IoIosAddCircle></h1></NavLink>
          <NavLink><h1><FaSearch></FaSearch></h1></NavLink>
          <NavLink><h1><IoMdHeartEmpty></IoMdHeartEmpty></h1></NavLink>
          <NavLink><h1><IoIosContact></IoIosContact></h1></NavLink>
        </div>
    </div>
    <hr></hr>
    </div>
  )
}

export default Header