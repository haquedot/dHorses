import React from 'react';
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
                        <img src="/src/assets/images/horse-1.svg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/horse-2.svg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/horse-3.svg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/horse-4.svg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/horse-5.svg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/horse-6.svg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/horse-7.svg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/horse-8.svg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/src/assets/images/horse-9.svg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Gallery;
