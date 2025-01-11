import React from 'react'
import './Idols.css'
import { Idols_img } from '../../assets/Idols_img/Idols_img'

const Idols = () => {
  return (
    <div className='idol'>
        <h2 className='idol_name'>Our Idols</h2>

        <div className='loops'>

            <div className='idol_section'>
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Dr. Ambedkar</h6>
                </div>
    
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Bhagat Singh</h6>
                </div>
    
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Jyotirao Phule</h6>
                </div>
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Savitribai Phule</h6>
                </div>
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Rani Lakshmibai</h6>
                </div>
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Dr. Ambedkar</h6>
                </div>
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Dr. Ambedkar</h6>
                </div>
            {/* </div> */}

            {/* Duplicate */}
            {/* <div className='idol_section'> */}
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Dr. Ambedkar</h6>
                </div>
    
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Bhagat Singh</h6>
                </div>
    
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Jyotirao Phule</h6>
                </div>
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Savitribai Phule</h6>
                </div>
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Rani Lakshmibai</h6>
                </div>
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Dr. Ambedkar</h6>
                </div>
                <div className='idol_box'>
                    <img src={Idols_img.user} alt="" />
                    <h6>Dr. Ambedkar</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Idols