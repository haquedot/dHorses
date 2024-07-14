import React from 'react';
import male from '../assets/images/male.svg';
import female from '../assets/images/female.svg';
import '../assets/styles/Testimonials-style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        review: 'Amazing experience! The horses were well-trained and the ride was smooth.',
        image: male,
    },
    {
        id: 2,
        name: 'Jane Smith',
        review: 'A wonderful day out with the family. Highly recommend!',
        image: female,
    },
    {
        id: 3,
        name: 'Michael Johnson',
        review: 'The staff were friendly and the horses were beautiful. Will definitely come back!',
        image: male,
    },
    {
        id: 4,
        name: 'Michael Johnson',
        review: 'The staff were friendly and the horses were beautiful. Will definitely come back!',
        image: male,
    }
];

const Testimonials = () => {
    return (
        <div className="container testimonials">
            <div className="d-flex justify-content-center align-items-center">
                <h2 className='text-center'>User</h2>
                <span>Reviews</span>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper py-5"
            >
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id} className="testimonial-card">
                        <div className="card border-0">
                            <img src={testimonial.image} className="card-img-top mx-auto mb-3" alt={testimonial.name} />
                            <div className="card-body">
                                <h5 className="card-title">{testimonial.name}</h5>
                                <p className="card-text">{testimonial.review}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
