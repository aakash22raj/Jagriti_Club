import React from 'react'
import './Event_folder.css'
import { FaRegCalendar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Event_data } from '../../Data/Event_Data/Event_data';


const Event_folder = () => {
  return (
    <div>
      <div className='event_folder'>
            <h4>List of Events</h4>
        <hr /> 

        <div className='event_fol_card'>    

          {Event_data.map((event) => (
            <div className='event_card' key={event.id}>
              <h4>{event.title}</h4>
              <div className='event_time'>
                <a><FaRegCalendar /></a>
                <p>{event.date}</p>
              </div>
              
              <p className='event_dec'>{event.description}</p>
  
              <div className='event_loc'>
                <a><IoLocationOutline /></a>
                <p>{event.location}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>      
    </div>
  )
}

export default Event_folder