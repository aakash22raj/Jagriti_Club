import React from 'react'
import { assets } from '../../assets/client_img/assets'
import './Gallery.css';
import Gallery_folder from '../../components/Gallery_Folder/Gallery_folder'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='gallery_img'>
        <img src={assets.gallery_banner} alt="" />
      </div>
      <div>
        <Gallery_folder />
      </div>
    </div>
  )
}

export default Gallery