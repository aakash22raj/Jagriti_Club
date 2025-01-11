import React from 'react'
import "./Develop.css";
import { Data } from '../../Data/Develop_Data/Data';
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Projects = () => {
    console.log(Data);
  return (
    <section className="projects container section" id='projects'>
        <h2 className="section__title">Our Developer Team</h2>

        <Swiper className="projects__container"
            loop={true}
            grabCursor={true}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            modules={[Pagination]}
        >
            {Data.map(({id, image, name, position, instagram, github, linkedin}) => {
                return (
                    <SwiperSlide className="projects__card" key={id}>
                        <img 
                            src={image} alt="" 
                            className="projects__img" 
                        />

                        <h3 className="projects__name">{name}</h3>
                        <p className="projects__description">{position}</p>
                        
                        <div className="projects__button">
                            <a className='icon' href={instagram}><BsInstagram /></a>
                            <a className='icon' href={github}><BsGithub /></a>
                            <a className='icon' href={linkedin}><BsLinkedin /></a>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
  )
}

export default Projects