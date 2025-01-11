import React from 'react'
import './Alumni.css'
import { assets } from '../../assets/client_img/assets'
import Alumni_folder from '../../components/Alumni_Folder/Alumni_folder'

const Alumni = () => {
  return (
    <div className='alumni'>
      <div className='alumni_img'>
        <img src={assets.touch} alt="" />
      </div>
      <div>
        <Alumni_folder />
      </div>
    </div>
  )
}

export default Alumni