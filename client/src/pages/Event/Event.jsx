import React from 'react'
import './Event.css'
import { assets } from '../../assets/client_img/assets'
import Event_folder from '../../components/Evant_Folder/Event_folder'
import Filter_Event from '../../components/Evant_Folder/Filter_Event'

const Event = () => {
  return (
    <div className='event'>
      <div className='event_img'>
        <img src={assets.event_banner} alt="" />
      </div>
      <div>
        <Filter_Event />
        <Event_folder />
      </div>
    </div>
  )
}

export default Event