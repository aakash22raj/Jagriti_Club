import React from 'react'
import './About.css'
import { assets } from '../../assets/client_img/assets'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='about'>
        <div className='about_img'>
            <img src={assets.about} alt="" />
        </div>
        <div className='about_club'>
            <h2>About Jagriti Club</h2>
            <p>Jagriti Club, a non-profitable college club, focuses on social work by teaching school students, spreading social awareness, and organizing diverse events in college, fostering positive change and contributing to the betterment of society.</p>
            <Link to='/about' onClick={()=>setMenu("home")}><button>Learn More</button></Link>
        </div>
    </div>
  )
}

export default About