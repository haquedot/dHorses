import React from 'react';
import '../assets/styles/Signin-style.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function Signin() {
    return (
        <>
            <div className="sign-in">
                <div className="container">
                    <div className="signin-div ms-auto me-auto ms-lg-auto p-4">
                        <Link to="/dHorses" className="navbar-brand">
                            <img src={logo} className='d-block mx-auto mb-4 brand-logo' alt="Brand Logo" />
                        </Link>
                        
                        {/* <div className="d-flex justify-content-center align-items-center heading mb-4">
                            <span>Sign</span>
                            <h2 className='text-center'>in</h2>
                        </div> */}
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email">Username</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <button type="submit" className="ms-auto sign-btn">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
