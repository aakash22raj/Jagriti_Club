// import React from 'react'
import React, { useState } from 'react';
import './Filter_Team.css'
import { BsInstagram, BsGithub, BsLinkedin, BsYoutube, BsFacebook } from "react-icons/bs";
// import { all_team } from '../../assets/team_img/all_team/all_team';
import { Team_Data } from '../../Data/Team_Data/Team_Data';



const Filter_Team = () => {


    const [selectedYear, setSelectedYear] = useState("4th"); // Step 1: Initialize state for selected year

    // Step 2: Filter team data based on selected year
    const filteredTeam = Team_Data.filter(member => member.year === selectedYear);

    // Step 3: Handle button click to set the selected year
    const handleFilter = (year) => {
      setSelectedYear(year);
    };



  return (
    <div>
        <div className='team_filter_folder'>
            <div>
                <div className='team_filter_buttom'>
                    <button
                        className={selectedYear === "4th" ? "active" : ""}
                        onClick={() => handleFilter("4th")}>      
                        Final Year
                    </button>
                    <button
                        className={selectedYear === "3rd" ? "active" : ""} 
                        onClick={() => handleFilter("3rd")}>
                        3rd Year
                    </button>
                    <button
                        className={selectedYear === "2nd" ? "active" : ""} 
                        onClick={() => handleFilter("2nd")}>
                        2nd Year
                    </button>
                </div>
                <hr />
                
                
                <div className='team_filter_card'> 
                    {filteredTeam.map((member) => (   
                        <div className='team_fil_card' key={member.id}>
                            <img src={member.image} alt={member.name} />
                            <h5>{member.name}</h5>
                            <h6 className='branch'>({member.Branch})</h6>
                            <p>{member.Position}</p>
                            <div className='team_fil_icons'>
                                {member.social_links.instagram && (
                                    <a href={member.social_links.instagram} target="_blank" rel="noopener noreferrer">
                                        <BsInstagram />
                                    </a>
                                )}
                                {member.social_links.github && (
                                    <a href={member.social_links.github} target="_blank" rel="noopener noreferrer">
                                        <BsGithub />
                                    </a>
                                )}
                                {member.social_links.linkedin && (
                                    <a href={member.social_links.linkedin} target="_blank" rel="noopener noreferrer">
                                        <BsLinkedin />
                                    </a>
                                )}
                                {member.social_links.youtube && (
                                    <a href={member.social_links.youtube} target="_blank" rel="noopener noreferrer">
                                        <BsYoutube />
                                    </a>
                                )}
                                {member.social_links.facebook && (
                                    <a href={member.social_links.facebook} target="_blank" rel="noopener noreferrer">
                                        <BsFacebook />
                                    </a>
                                )}
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter_Team