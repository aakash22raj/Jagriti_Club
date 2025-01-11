// import React from 'react'
import React, { useState, useEffect } from 'react';
import './Filter_Event.css'
import { FaRegCalendar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { Event_data } from '../../Data/Event_Data/Event_data';

const Filter_Event = () => {



    const [filteredEvents, setFilteredEvents] = useState([]);
    const [activeFilter, setActiveFilter] = useState('Ongoing');
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        year: '',
        branch: '',
    });
  
    const getCurrentYear = () => new Date().getFullYear();
  
    // Function to parse event date and include the current year if not specified
    const parseEventDate = (dateString) => {
      const currentYear = getCurrentYear();
      return new Date(`${dateString} ${currentYear}`);
    };
  
    // Function to filter events based on the selected type
    const filterEvents = (type) => {
      const currentDateTime = new Date();
  
      const events = Event_data.filter((event) => {
        const eventDateTime = parseEventDate(event.date);
        const [startTime, endTime] = event.time.split(' to ').map(time => new Date(`${event.date} ${getCurrentYear()} ${time}`));
  
        if (type === 'Ongoing') {
          return (
            currentDateTime >= new Date(startTime.getTime() - 60 * 60 * 1000) && // Starts 1 hour before the event
            currentDateTime <= new Date(endTime.getTime() + 30 * 60 * 1000)    // Ends 30 minutes after the event
          );
        } else if (type === 'Upcoming') {
          const fiveDaysAhead = new Date();
          fiveDaysAhead.setDate(currentDateTime.getDate() + 5);
          return (
            eventDateTime > currentDateTime && // After the current time
            eventDateTime <= fiveDaysAhead    // Within the next 5 days
          );
        } else if (type === 'Past') {
          const fifteenDaysAgo = new Date();
          fifteenDaysAgo.setDate(currentDateTime.getDate() - 15);
          return (
            eventDateTime < currentDateTime && // Event time is before now
            currentDateTime > new Date(endTime.getTime() + 30 * 60 * 1000) &&      
            eventDateTime >= fifteenDaysAgo   // Within the last 15 days
          );
        }
        return false;
      });
  
      setFilteredEvents(events);
    };
  
    // Handle button click and filter events
    const handleFilterClick = (type) => {
      setActiveFilter(type);
      filterEvents(type);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRegisterClick = () => {
        const { fullName, phoneNumber, year, branch } = formData;
        if (fullName && phoneNumber && year && branch) {
            console.log('Form Data:', formData);
            setFormData({ fullName: '', phoneNumber: '', year: '', branch: '' });
            setShowRegisterForm(false);
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 4000); // Success message disappears after 4 seconds
        } else {
            alert('Please fill all fields before submitting.');
        }
    };
  
    // Default filter on component mount
    useEffect(() => {
      filterEvents('Ongoing');
    }, []);
  




  return (
    <div>
        <div className='filter_event'>
                <h4>Scheduled Events</h4>
            <hr /> 
    
            <div className='filter_button'>
                <button 
                    className={`filter-btn ${activeFilter === 'Ongoing' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('Ongoing')}>
                    Ongoing
                </button>
    
                <button 
                    className={`filter-btn ${activeFilter === 'Upcoming' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('Upcoming')}>
                    Upcoming
                </button>
    
                <button 
                    className={`filter-btn ${activeFilter === 'Past' ? 'active' : ''}`}
                    onClick={() => handleFilterClick('Past')}>
                    Past Event
                </button>
            </div>
    
    
            <div className='filter_event_card'>   
                {filteredEvents.map((event) => ( 
                    <div className='filter_card' key={event.id}>
                        <div className='filter_tital'>
                            <h4>{event.title}</h4>
                            {activeFilter === 'Ongoing' && (
                                <div className='filter_live'>
                                    <a><BsLightningCharge/></a>
                                    <p>Live</p>
                                </div>
                            )}
                        </div>
        
        
                        <div>
                            <div className='filter_time'>
                                <a><FaRegCalendar /></a>
                                <p>{event.date}</p>
                            </div>
                           
                            {(activeFilter === 'Ongoing' || activeFilter === 'Upcoming') && (
                                <div className='filter_time'>
                                    <a><LuAlarmClock /></a>
                                    <p>{event.time}</p>
                                </div>
                            )}
                        </div>
        
                        
                        <p className='filter_dec'>{event.description}</p>
            
                        <div className='filter_loc'>
                          <a><IoLocationOutline /></a>
                          <p>{event.location}</p>
                        </div>
        
                        {activeFilter === 'Upcoming' && (
                            <div className='filter_reg'>
                                <button onClick={() => setShowRegisterForm(true)}>Register</button>
                            </div>
                        )}
                    </div>   
                ))}
            </div>
        </div>   


        {showRegisterForm && (
            <div className='register_form_overlay'>
                <div className='register_form'>
                    <p className='close_button' onClick={() => setShowRegisterForm(false)}>x</p>
                    <h4>Register for the Event</h4>
                    <input
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />
                    <input
                        type='text'
                        name='phoneNumber'
                        placeholder='Phone Number'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                    <input
                        type='text'
                        name='year'
                        placeholder='Year'
                        value={formData.year}
                        onChange={handleInputChange}
                    />
                    <input
                        type='text'
                        name='branch'
                        placeholder='Branch'
                        value={formData.branch}
                        onChange={handleInputChange}
                    />
                    <div className='register_form_actions'>
                        <button onClick={handleRegisterClick}>Submit</button>
                        
                    </div>
                </div>
            </div>
        )}
        {showSuccessMessage && (
            <div className='success_message'>
                <p>Congratulations, you have registered!</p>
            </div>
        )}

    </div>
  )
}

export default Filter_Event
