import React, { useState } from 'react';
import '../assets/styles/LandingPage.css'
import logo from '../assets/images/logo.svg'
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';

const LandingPage = () => {

    const [showBookingForm, setShowBookingForm] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);

    const handleShowBookingForm = () => setShowBookingForm(true);
    const handleCloseBookingForm = () => setShowBookingForm(false);

    const handleBookingSubmit = (details) => {
        setBookingDetails(details);
        setShowBookingForm(false);
    };

    const handleCloseConfirmation = () => setBookingDetails(null);

    return (
        <div className="landing-page">
            <BookingForm
                show={showBookingForm}
                handleClose={handleCloseBookingForm}
                onSubmit={handleBookingSubmit}
            />
            {bookingDetails && (
                <BookingConfirmation
                    details={bookingDetails}
                    handleClose={handleCloseConfirmation}
                />
            )}
            <div className="container">
                <div className="d-block text-center">
                    {/* <img src="/src/assets/images/logo.svg" alt="" className='logo'/> */}
                    <h6>Discover</h6>
                    <h1 className='mb-3'>Your Perfect Horse <br />Ride Experience</h1>
                    <button type="button" className='book-now' onClick={handleShowBookingForm}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
