import React from 'react';
import '../assets/styles/Footer-style.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src="/src/assets/images/logo.svg" className='logo'/>
                        <p className='text-white'>
                            We offer unforgettable horse riding experiences. Join us for a ride and discover the beauty of the outdoors.
                        </p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Gallery</a></li>
                            <li><a href="#" className="text-white">Pricing</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Contact Us</h5>
                        <p>
                            <i className="bi bi-geo-alt-fill"></i> 123 Garhara, Begusarai, Bihar, India
                        </p>
                        <p>
                            <i className="bi bi-telephone-fill"></i> +91 8748734236
                        </p>
                        <p>
                            <i className="bi bi-envelope-fill"></i> dhorses@gmail.com
                        </p>
                    </div>
                </div>
                <div className="text-center pt-5 pb-2">
                    <p className="mb-0">&copy; 2024 D Horses. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
