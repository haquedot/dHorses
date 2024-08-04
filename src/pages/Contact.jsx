import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Contact() {
    return (
        <>
            <Navbar />
            <div className='container my-5'>
                <h1 className='py-5'>Contact Us</h1>
                <section className='my-4'>
                    <h2>Get in Touch</h2>
                    <p>We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
                </section>
                <section className='my-4'>
                    <h2>Contact Information</h2>
                    <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> contact@ourcompany.com</p>
                </section>
                <section className='my-4'>
                    <h2>Contact Form</h2>
                    <form>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <input type='text' className='form-control' id='name' placeholder='Your Name' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input type='email' className='form-control' id='email' placeholder='Your Email' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='subject' className='form-label'>Subject</label>
                            <input type='text' className='form-control' id='subject' placeholder='Subject' required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='message' className='form-label'>Message</label>
                            <textarea className='form-control' id='message' rows='5' placeholder='Your Message' required></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
