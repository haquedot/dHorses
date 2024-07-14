// src/components/HorseDetails.jsx

import React from 'react';
import thunderHorse from '../assets/images/thunder-horse.svg';
import lightningHorse from '../assets/images/lightning-horse.svg';
import stormHorse from '../assets/images/storm-horse.svg';
import breezeHorse from '../assets/images/breeze-horse.svg';
import white1 from '../assets/images/white-1.svg';
import white2 from '../assets/images/white-2.svg';
import white3 from '../assets/images/white-3.svg';
import white4 from '../assets/images/white-4.svg';

import '../assets/styles/HorseDetails.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const horses = [
    { id: 1, name: 'Thunder', image: thunderHorse, logo: white1, rides: 36 },
    { id: 2, name: 'Lightning', image: lightningHorse, logo: white4, rides: 28 },
    { id: 3, name: 'Storm', image: stormHorse, logo: white3, rides: 45 },
    { id: 4, name: 'Breeze', image: breezeHorse, logo: white2, rides: 32 },
];

const HorseDetails = () => {
    return (
        <section className='container my-5 horse-detail'>
            <div className="d-flex justify-content-center align-items-center mb-5 heading">
                <h2 className='text-center'>Our</h2>
                <span>Horses</span>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                {horses.map(horse => (
                    <SwiperSlide key={horse.id} className="horse-card col-md-3 mb-4">
                        <div className="card border-0">
                            <img src={horse.image} className="card-img-top" alt={horse.name} />
                            <div className="card-img-overlay d-flex flex-column justify-content-between align-items-center">
                                <div className="w-100 d-flex flex-column">
                                    <h5 className="card-title text-start">{horse.name} <br />Horse</h5>
                                </div>
                                <div className="w-100 d-flex ride-count">
                                    <h4 className='m-0 text-start'><span>{horse.rides}</span><br />Rides</h4>
                                </div>
                            </div>
                            <button className="book-now-btn bg-transparent border-0">
                                <img src={horse.logo} alt="" />
                            </button>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default HorseDetails;
