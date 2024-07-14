import React, { useState } from 'react';
import '../assets/styles/BookingForm-style.css';

const BookingForm = ({ show, handleClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        horse: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="bookingFormModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="bookingFormModalLabel">Book Your Horse Ride</h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Preferred Date</label>
                                <input type="date" className="form-control" id="date" value={formData.date} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">Preferred Time</label>
                                <input type="time" className="form-control" id="time" value={formData.time} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="horse" className="form-label">Select Horse</label>
                                <select className="form-select" id="horse" value={formData.horse} onChange={handleChange} required>
                                    <option value="">Select...</option>
                                    <option value="horse1">Horse 1</option>
                                    <option value="horse2">Horse 2</option>
                                    <option value="horse3">Horse 3</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;

