import React from 'react';
import horse1 from '../assets/images/horse-1.svg';
import horse2 from '../assets/images/horse-2.svg';
import horse3 from '../assets/images/horse-3.svg';
import horse4 from '../assets/images/horse-4.svg';
import horse5 from '../assets/images/horse-5.svg';
import horse6 from '../assets/images/horse-6.svg';
import horse7 from '../assets/images/horse-7.svg';
import horse8 from '../assets/images/horse-8.svg';
import horse9 from '../assets/images/horse-9.svg';

import '../assets/styles/Gallery-style.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Gallery = () => {


    return (
        <>

            <div className="d-block gallery">
                <div className="d-flex justify-content-center align-items-center">
                    <h2 className='text-center'>Our</h2>
                    <span>Gallery</span>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={horse1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={horse2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={horse3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={horse4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={horse5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={horse6} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={horse7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={horse8} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={horse9} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Gallery;
