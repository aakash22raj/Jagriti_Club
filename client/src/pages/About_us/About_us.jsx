import React from 'react'
import { assets } from '../../assets/client_img/assets'
import './About_us.css'
import Vision from '../../components/Vision/Vision'
import Journey from '../../components/Journey/Journey'

const About_us = () => {
  return (
    <div className='about_us'>
      <div className='about_us_img'>
        <img src={assets.about_banner} alt="" />
      </div>
      <div>
        <Vision />
        <Journey />
      </div>
    </div>
  )
}

export default About_us