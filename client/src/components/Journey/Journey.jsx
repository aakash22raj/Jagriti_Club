import React from 'react'
import './Journey.css'
import { assets } from '../../assets/client_img/assets'

const Journey = () => {
  return (
    <div className='journey'>
        <h2 className='journey_name'>The Journey of Jagriti Club</h2>

        <div className='story'>
            <div className='the_story'>
                <h3>Our Story</h3>
                <p>
                The Jagriti Club, founded on November 7, 2017, by seniors, 
                stands as a beacon of awareness and empowerment. Inspired 
                by idols like Dr. B.R. Ambedkar, A.P.J. Abdul Kalam, Bhagat Singh, 
                Jyotiba Phule, and others, the club thrives on its mission to serve society. 
                Driven by the slogan "Pay Back to Society," Jagriti organizes impactful events, 
                promotes education, and fosters social justice. With unwavering dedication, 
                the club instills the values of unity, equality, and service among its members, 
                creating a ripple of positive change for generations to come.
                </p>
            </div>
            <div className='story_img'>
                <img src={assets.story} alt="" />
            </div>
        </div>


        <div className='journey_start'>
            <div className='journey_1'>
                <h4>2017: The Seed is Planted</h4>
                <p>Founded by a group of passionate students, our club took its first steps towards promoting society diversity on campus.</p>
            </div>

            <div className='journey_2'>
                <h4>2019: Visited multiple schools</h4>
                <p>Visited schools to raise awareness about society, organizing events like plantation drives, blood donation, Shramdaan, and many others. </p>
            </div>

            <div className='journey_3'>
                <h4>2017: Follow idol of our ideals</h4>
                <p>We follow the ideals of our idols, embracing digital advancements while never forgetting their sacrifices and contributions.</p>
            </div>

            <div className='journey_4'>
                <h4>2017: The Seed is Planted</h4>
                <p>FFounded by a group of passionate students, our club took its first steps towards promoting cultural diversity on campus.</p>
            </div>
        </div>

    </div>
  )
}

export default Journey