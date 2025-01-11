// import React from 'react'
import React, { useState } from "react";
import './Alumni_folder.css'
// import { alumni } from '../../assets/alumni/alumni'
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { Alumni_data } from '../../Data/Alumni_Data/Alumni_data';

const Alumni_folder = () => {

    
    // Popup model
    // State to handle popup visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAlumni, setSelectedAlumni] = useState(null);

    // Open modal
    const handleOpenModal = (alumni) => {
        // setSelectedAlumni(alumni);
        setSelectedAlumni(alumni.details[0]);
        setIsModalOpen(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedAlumni(null);
    };



  return (
    <div>
        <div className='alumni_folder'>
            {Alumni_data.map((batch) => (
                <div key={batch.id}>
                    <div className='alumni_title'>
                        <h4>Batch : {batch.batch}</h4>
                    </div>
                    <hr />
                    
                    
                    <div className='alumni_fol_card'>
                        {batch.data.map((alumni) => (    
                            <div className='alumni_card'
                                key={alumni.id}
                                onClick={() => handleOpenModal(alumni)}>
                                <img src={alumni.image} alt={alumni.name} />
                                <h5>{alumni.name}</h5>
                                <p>({alumni.post})</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    
    
                {/* Modal Popup */}
                {isModalOpen && selectedAlumni && (
                    <div className="modal_alumni" onClick={handleCloseModal}>
                        <div className="alumni_modal_content" onClick={(e) => e.stopPropagation()}>
                            <span className="alumni_close" onClick={handleCloseModal}>
                                &times;
                            </span>
    
                            <div className="alumni_model">
                                <img src={selectedAlumni.image} alt={selectedAlumni.image} />
                                <div className="alumni_details">
                                    <h3>{selectedAlumni.name}</h3>
                                    <h5>{selectedAlumni.branch}</h5>
                                    <h5>({selectedAlumni.work})</h5>
                                    <p>{selectedAlumni.email}</p>
                                    <div className="alumani_icon">
                                        <a className='icon' 
                                            href={selectedAlumni.social_links.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <BsInstagram />
                                        </a>
                                        <a className='icon'
                                            href={selectedAlumni.social_links.github}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <BsGithub />
                                        </a>
                                        <a className='icon' 
                                            href={selectedAlumni.social_links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <BsLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
    
                            <hr />
    
                            <div className="alumni_des">
                                <p>
                                    {selectedAlumni.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
        {/* </div> */}
    </div>
  )
}

export default Alumni_folder