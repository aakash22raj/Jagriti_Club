import React, { useState } from "react";
import './Gallery_Img.css'
import { assets } from '../../assets/client_img/assets'
// import { gallery } from '../../assets/gallery/gallery'
import { Gallery_data } from '../../Data/Gallery_Data/Gallery_data'
import { useParams } from "react-router-dom";



const Gallery_Img = () => {



    const { year, id } = useParams(); // Get year and item ID from URL
    const yearData = Gallery_data.find((data) => data.year === year);
    const itemData = yearData?.data.find((item) => item.id === parseInt(id));



    // Popup modal
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleOpenModal = (index) => {
        setSelectedImageIndex(index); // Open modal with selected image
    };

    const handleCloseModal = () => {
        setSelectedImageIndex(null); // Close modal
    };

    const handleNextImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex < itemData.details.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const handlePrevImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };



  return (
    <div>
        <div className='gallery_img'>
            <img src={assets.gallery_img} alt="" />
        </div>
        {itemData ? (
            <>
                <div className='gallery_img_card'>
                   {itemData.details.map((detail, index) => (
                        <div className='gallery_img_img' 
                            key={detail.id}
                            onClick={() => handleOpenModal(index)} // Open modal on click
                        >
                            <img src={detail.images} alt={`Detail ${detail.id}`} />
                        </div>
                    ))}
                </div>



                {/* Modal Popup */}
                {selectedImageIndex !== null && (
                    <div className="modal">
                        <div className="modal_content">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <img
                                src={itemData.details[selectedImageIndex].images}
                                alt={`Detail ${itemData.details[selectedImageIndex].id}`}
                            />
                            
                            <div className="modal_navigation">
                                <button onClick={handlePrevImage} disabled={selectedImageIndex === 0}>
                                    Previous
                                </button>

                                <button
                                    onClick={handleNextImage}
                                    disabled={selectedImageIndex === itemData.details.length - 1}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}    
    
            </>
        ) : (
            <p className='not_found'>Currentaly image not uploaded</p>
        )}
    </div>
  );
};

export default Gallery_Img