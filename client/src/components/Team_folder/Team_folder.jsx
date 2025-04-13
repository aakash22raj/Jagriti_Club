import React from 'react'
import './Team_folder.css'
import { mentor } from '../../assets/team_img/mentor/mentor'


const Team_folder = () => {
  return (
    <div>
      <div className='team_folder'>

        <div>
          <div className='team_title'>
            <h4>Our Protectors</h4>
          </div>
          <hr />
          
          
          <div className='team_fol_card'>    
            <div className='team_card'>
              <img src={mentor.direc} alt='' />
              <h5>Dr. Nelendra Badal</h5>
              <p>Mentor</p>
              <h6>(Director)</h6>
            </div>
            <div className='team_card'>
              <img src={mentor.regis} alt='' />
              <h5>Mr. Naresh Kumar</h5>
              <p>Protector</p>
              <h6>(Registrar)</h6>
            </div>
            <div className='team_card'>
              <img src={mentor.santosh} alt='' />
              <h5>Mr. Santosh Kumar</h5>
              <p>Convener</p>
              <h6>(Faculty IT Department)</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team_folder