// import React from 'react'
import './Join.css'
import { assets } from '../../assets/client_img/assets'
import React, { useState } from 'react'
import { RiCloseLargeLine } from "react-icons/ri";

const Join = () => {

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
      setToggleState(index);
  }

  return (
    <div>
      <div className='join'>
        <div className='join_club'>
          <h2>Welcome to the 'Jagriti Club' </h2>
          <p>
            Welcome to Jagriti Club, where passion meets purpose! Join us in making a real difference by teaching young minds, spreading awareness, and organizing impactful events. Be a part of a community that inspires change and empowers society!
          </p>
          <button onClick={() => toggleTab(1)}>Join</button>
        </div>
        <div className='join_img'>
          <img src={assets.join_club} alt="" />
        </div>
      </div>
  
      <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
        <div className="services__model-content">

          <i onClick={() => toggleTab(0)} className="services__model-close"><RiCloseLargeLine /></i>
          
          <h3 className="services__model-title">
            Fill out the form to join the Club
          </h3>
          
  
          <form action="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input 
                  type="text"
                  name='name'
                  className='contact__form-input'
                  placeholder='Enter Your name' 
                  required
              />
            </div>
  
            <div className="contact__form-div">
                <label className="contact__form-tag">Contact</label>
                <input 
                    type="number"
                    name='contact'
                    className='contact__form-input'
                    placeholder='Enter Your contact number' 
                    required
                />
            </div>
  
            <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Message</label>
                <textarea 
                    name="message" 
                    cols="30" 
                    rows="10" 
                    className='contact__form-input' 
                    placeholder='Drop a message about year & hobby' 
                    required>
                </textarea>
            </div>
  
            <button className="button">
                Send Message
            </button>
  
          </form>
        </div>
      </div>
    </div>
  )
}

export default Join