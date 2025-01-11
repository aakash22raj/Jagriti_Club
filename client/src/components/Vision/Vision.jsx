import React from 'react'
import { PiEqualsFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { LuSchool } from "react-icons/lu";
import { IoSchool } from "react-icons/io5";
import { GiInjustice } from "react-icons/gi";
import { MdPublishedWithChanges, MdEmojiEvents } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import './Vision.css';

const Vision = () => {
  return (
    <div className='vission'>
        <div className='our_mission'>
            <p className='mission_p'> OUR MISSION</p>
            <h2>Empowering society through education and equality</h2>
            
            <div className='our_m'>
                <div className='icon'>
                    <i><LuSchool /></i>
                </div>
                <div className='info'>
                    <h3>Promoting Education and Awareness</h3>
                    <p>Providing free education and awareness programs to underprivileged children and communities</p>
                </div>
            </div>

            <div className='our_m'>
                <div className='icon'>
                    <i><PiEqualsFill/></i>
                </div>
                <div className='info'>
                    <h3>Fostering Equality and Inclusion</h3>
                    <p>Advocating for an inclusive society where everyone is treated with dignity and respect, regardless of their background</p>
                </div>
            </div>

            <div className='our_m'>
                <div className='icon'>
                    <i><MdEmojiEvents /></i>
                </div>
                <div className='info'>
                    <h3>Cultural Events with a Purpose</h3>
                    <p>Organizing cultural events to creatively deliver impactful social messages and address critical societal issues</p>
                </div>
            </div>

            <div className='our_m'>
                <div className='icon'>
                    <i><BsFillPeopleFill/></i>
                </div>
                <div className='info'>
                    <h3>Engaging Youth for Social Leadership</h3>
                    <p>Encouraging students to lead initiatives that bridge the gap between education, culture, and social responsibility</p>
                </div>
            </div>

        </div>


        <div className='our_vision'>
            <p className='mission_p'> OUR VISION</p>
            <h2>Building equity through education, equality, awareness</h2>
            
            <div className='our_m'>
                <div className='icon'>
                    <i><IoSchool /></i>
                </div>
                <div className='info'>
                    <h3>Access to Education for All</h3>
                    <p>Dedicated to providing quality education as a fundamental right for every child</p>
                </div>
            </div>

            <div className='our_m'>
                <div className='icon'>
                    <i><GiInjustice/></i>
                </div>
                <div className='info'>
                    <h3>Equality and Social Justice</h3>
                    <p>Working to eliminate discrimination based on caste, gender, and religion, inspired by Dr. B.R. Ambedkar's ideology</p>
                </div>
            </div>

            <div className='our_m'>
                <div className='icon'>
                    <i><MdPublishedWithChanges /></i>
                </div>
                <div className='info'>
                    <h3>Creating Positive Social Change</h3>
                    <p>Spreading awareness and addressing societal issues like child labor, gender inequality, and illiteracy</p>
                </div>
            </div>

            <div className='our_m'>
                <div className='icon'>
                    <i><IoIosPeople/></i>
                </div>
                <div className='info'>
                    <h3>Inspiring Youth Leadership</h3>
                    <p>Encouraging young minds to take active roles in driving social change through innovative ideas and leadership</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Vision