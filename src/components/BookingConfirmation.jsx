import React from 'react';

const BookingConfirmation = ({ details, handleClose }) => {
    const { name, date, time, horse } = details;

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Booking Confirmed!</h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <p>Thank you, {name}! Your booking has been confirmed.</p>
                        <p>You have booked a ride with {horse} on {date} at {time}.</p>
                        <p>We look forward to seeing you!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;
