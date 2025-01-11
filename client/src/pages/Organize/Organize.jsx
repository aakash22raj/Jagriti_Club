import React from 'react'
import './Organize.css'
import { assets } from '../../assets/client_img/assets'
import Organize_fol from '../../components/Organize_Folder/Organize_fol'

const Organize = () => {
  return (
    <div className='organize'>
      <div className='organize_img'>
        <img src={assets.organize} alt="" />
      </div>
      <div>
        <Organize_fol />
      </div>
    </div>
  )
}

export default Organize