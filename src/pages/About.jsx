import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function About() {
    return (
        <>
            <Navbar />
            <div className='container my-5'>
                <h1 className='py-5'>About Us</h1>
                <section className='my-4'>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to deliver the best services and products to our customers. We are committed to innovation, excellence, and integrity in all that we do.
                    </p>
                </section>
                <section className='my-4'>
                    <h2>Who We Are</h2>
                    <p>
                        We are a team of passionate professionals dedicated to making a positive impact in our industry. Our diverse backgrounds and expertise enable us to approach challenges from unique perspectives and deliver exceptional results.
                    </p>
                </section>
                <section className='my-4'>
                    <h2>Our Team</h2>
                    <p>
                        Meet the people behind our success:
                    </p>
                    <ul>
                        <li>John Doe - CEO</li>
                        <li>Jane Smith - CTO</li>
                        <li>Emily Johnson - Lead Designer</li>
                        <li>Michael Brown - Head of Marketing</li>
                    </ul>
                </section>
                <section className='my-4'>
                    <h2>Our Values</h2>
                    <p>
                        We believe in:
                    </p>
                    <ul>
                        <li>Integrity: We act with honesty and integrity, not compromising the truth.</li>
                        <li>Innovation: We strive to innovate and improve every day.</li>
                        <li>Excellence: We aim for excellence in everything we do.</li>
                        <li>Teamwork: We work together, across boundaries, to meet the needs of our customers and to help our Company win.</li>
                    </ul>
                </section>
                <section className='my-4'>
                    <h2>Contact Us</h2>
                    <p>
                        Have any questions or feedback? Feel free to <a href='/contact'>contact us</a>.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default About;
