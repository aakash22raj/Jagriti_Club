import React from 'react'
import './Gallery_folder.css'
// import { gallery } from '../../assets/gallery/gallery'
import { Link } from "react-router-dom";
import { Gallery_data } from '../../Data/Gallery_Data/Gallery_data';



const Gallery_folder = () => {
    return (
        <div>
            {Gallery_data.map((yearData) => (
                <div className='gallery_folder'>
                    <div className='gallery_title'>
                        <h4>Event Pictures : {yearData.year}</h4>
                    </div>
                    <hr /> 
            
                    <div className='gallery_fol_card'>
                        {yearData.data.map((item) => (
                            <Link to={`/gallery/${yearData.year}/${item.id}`}>
                                <div className='gallery_card'>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Gallery_folder