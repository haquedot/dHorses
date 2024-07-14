import React, { useState, useEffect } from 'react';
import '../assets/styles/Navbar-style.css';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-lg-transparent fixed-top `}>
                <div className="w-100 d-flex justify-content-center">
                    <div className={`custom-nav d-flex align-items-lg-center ${scrolled ? 'navbar-scrolled' : 'bg-body-transparent'}`}>
                        <a className="navbar-brand" href="#">
                            <img src={logo} className='brand-logo' alt="Brand Logo" />
                        </a>

                        <div className="d-flex">
                            <button className="navbar-toggler sign-btn">Sign in</button>

                            <button className="navbar-toggler bg-transparent border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <i className="bi bi-text-center fs-2"></i>
                            </button>
                        </div>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                    <img src={logo} className='brand-logo' />
                                </h5>

                                <button type="button" className="btn-close bg-transparent border-0 ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <i className="bi bi-x-lg text-white"></i>
                                </button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end justify-content-lg-center align-items-lg-center flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>

                                </ul>
                                <form className="d-flex mt-3 mt-lg-0" role="search">
                                    <button className="sign-btn d-none d-lg-block" type="submit">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
