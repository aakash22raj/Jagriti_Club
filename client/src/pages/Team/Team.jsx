import React from 'react'
import './Team.css'
import { assets } from '../../assets/client_img/assets'
import Team_folder from '../../components/Team_folder/Team_folder'
import Filter_Team from '../../components/Team_folder/Filter_Team'

const Team = () => {
  return (
    <div className='team'>
      <div className='team_img'>
        <img src={assets.our_team} alt="" />
      </div>
      <div>
        <Team_folder />
        <Filter_Team/>
      </div>
    </div>
  )
}

export default Team