import React from 'react';
import '../assets/styles/Pricing-style.css';

const pricingData = [
    {
        id: 1,
        title: 'Basic Package',
        price: '$50',
        duration: '1 Hour',
        features: ['Guided Tour', 'Beginner Friendly', 'Safety Gear Included']
    },
    {
        id: 2,
        title: 'Standard Package',
        price: '$90',
        duration: '2 Hours',
        features: ['Guided Tour', 'Intermediate Level', 'Safety Gear Included', 'Photo Package']
    },
    {
        id: 3,
        title: 'Premium Package',
        price: '$150',
        duration: '3 Hours',
        features: ['Guided Tour', 'Advanced Level', 'Safety Gear Included', 'Photo Package', 'Refreshments']
    }
];

const Pricing = () => {
    return (
        <div className="container pricing">
            <div className="d-flex justify-content-center align-items-center mb-5">
                <h2 className='text-center'>Our</h2>
                <span>Rates</span>
            </div>
            <div className="row m-0">
                {pricingData.map(pricing => (
                    <div key={pricing.id} className="col-md-4 mb-4">
                        <div className="card pricing-card">
                            <div className="card-header text-center">
                                <h3>{pricing.title}</h3>
                                <h4>{pricing.price}</h4>
                                <p>{pricing.duration}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                {pricing.features.map((feature, index) => (
                                    <li key={index} className="list-group-item"><i className="bi bi-check-circle-fill text-success pe-2"></i>{feature}</li>
                                ))}
                            </ul>
                            <div className="card-body d-flex align-items-end">
                                <button className="btn btn-primary w-100">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
