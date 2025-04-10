import React from 'react'
import './Footer.css';
import { assets } from '../../assets/client_img/assets'
import { GrInstagram } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo_name} alt="" />
                <p>Welcome to Jagriti Club, where passion meets purpose! Join us in making a real difference by teaching young minds, spreading awareness, and organizing impactful events. Be a part of a community that inspires change and empowers society!</p>
                <div className='footer-social-icons'>
                    <i><GrInstagram /></i>
                    <i><FiTwitter /></i>
                    <i><FaSquareFacebook /></i>
                    <i><IoLogoYoutube/></i>
                    <i><FaLinkedinIn /></i>
                    {/* <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" /> */}
                </div>
            </div>
            <div className="footer-content-center">
                <h2>College Club</h2>
                <ul>
                    <Link to='/' onClick={()=>setMenu("home")}><li>Home</li></Link>
                    <Link to='/about' onClick={()=>setMenu("about")}><li>About us</li></Link>
                    <Link to='/gallery' onClick={()=>setMenu("gallery")}><li>Gallery</li></Link>
                    <Link to='/event' onClick={()=>setMenu("event")}><li>Event</li></Link>
                    <Link to='/alumni' onClick={()=>setMenu("home")}><li>Alumni</li></Link>
                    <Link to='/organize' onClick={()=>setMenu("sponser")}><li>Sponser</li></Link>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-930-559-5064</li>
                    <li>jagriticlub@recb.ac.in</li>
                </ul>
                <button>Admin Panel</button>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            Copyright 2024 &#169; Jagriticlub.in - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer