import React from 'react';
import '../assets/styles/BookingProcess-style.css';

const BookingProcess = () => {
    return (
        <div className="container booking-process">
            <div className="d-flex justify-content-center align-items-center mb-5">
                <h2 className='text-center'>Booking</h2>
                <span>Process</span>
            </div>
            <div className="row text-center m-0">
                <div className="col-md-3 step">
                    <div className="border border-1 rounded p-3">
                        <div className="icon">
                            <i className="bi bi-calendar-date fs-1"></i>
                        </div>
                        <h4>Select Date</h4>
                        <p>Choose your preferred date for the horse ride.</p>
                    </div>
                </div>
                <div className="col-md-3 step">
                    <div className="border border-1 rounded p-3">

                        <div className="icon">
                            <i className="bi bi-check2-circle fs-1"></i>
                        </div>
                        <h4>Choose Package</h4>
                        <p>Select the ride package that suits you best.</p>
                    </div>

                </div>
                <div className="col-md-3 step">
                    <div className="border border-1 rounded p-3">
                        <div className="icon">
                            <i className="bi bi-currency-rupee fs-1"></i>
                        </div>
                        <h4>Make Payment</h4>
                        <p>Securely pay online for your selected package.</p>
                    </div>
                </div>
                <div className="col-md-3 step">
                    <div className="border border-1 rounded p-3">
                        <div className="icon">
                            <i className="bi bi-trophy fs-1"></i>
                        </div>
                        <h4>Enjoy Ride</h4>
                        <p>Arrive at the stable and enjoy your ride!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingProcess;
