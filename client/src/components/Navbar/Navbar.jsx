// import React from 'react'
import React, { useState } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/client_img/assets'
import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { FiAlignJustify } from "react-icons/fi";
// import {useState} from "react";



const Navbar = () => {

  const[isMobile, setIsMobile] = useState(false);

  return (
    <div className='nav'>
      <div className='navbar'>
        <Link to='/'>
          <img className='logo' src={assets.club_logo2} alt="AK" />
        </Link>
      </div>

      <div className='nav_list '>
        <ul className={isMobile ? "nav-links-mobile" : "nav_menu"} 
          onClick={() => setIsMobile(false)}>

          <Link to='/' className='nav_icon'>
            <li className='home'>Home</li>
          </Link>

          <Link to='/about'  className='nav_icon'>
            <li className="about_us"> About Us</li>
          </Link>
          
          <Link to='/gallery' className='nav_icon'>
            <li className="gallery">Gallery</li>
          </Link>

          <Link to='/team' className='nav_icon'>
            <li className="team">Our Team</li>
          </Link>
          
          <Link to='/event' className='nav_icon'>
            <li className="event">Event</li>
          </Link>

          <Link to='/alumni' className='nav_icon'>
            <li className="event">Alumni</li>
          </Link>
          
          <Link to='/organize' className='nav_icon'>
            <li className="sponser">Organize</li>
          </Link>
        </ul>

        <div className='mobile_menu_icon' 
          onClick={()=> setIsMobile(!isMobile)}>
          {isMobile ? (
            <li className='icon'><RiCloseLargeFill className="nav-icon" /></li>
          ) : (
            <li className='icon'><FiAlignJustify className="nav-icon" /></li>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar