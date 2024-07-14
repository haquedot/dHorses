// src/components/HorseDetails.jsx

import React from 'react';
import '../assets/styles/HorseDetails.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const horses = [
    { id: 1, name: 'Thunder', image: '/src/assets/images/thunder-horse.svg', logo: '/src/assets/images/white-1.svg', rides: 36 },
    { id: 2, name: 'Lightning', image: '/src/assets/images/lightning-horse.svg', logo: '/src/assets/images/white-4.svg', rides: 28 },
    { id: 3, name: 'Storm', image: '/src/assets/images/storm-horse.svg', logo: '/src/assets/images/white-3.svg', rides: 45 },
    { id: 4, name: 'Breeze', image: '/src/assets/images/breeze-horse.svg', logo: '/src/assets/images/white-2.svg', rides: 32 },
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
                        <div className="card">
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
