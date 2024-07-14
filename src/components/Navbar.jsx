import React from 'react';
import '../assets/styles/Navbar-style.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top custom-nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href='#'>
                        <img src="/src/assets/images/logo.svg" className="brand-logo" />
                    </a>
                    <button className="ms-auto bg-transparent border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <i className="bi bi-list-nested text-white fs-3"></i>
                    </button>
                    <div className="offcanvas offcanvas-end bg-transparent" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="ms-auto bg-transparent border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="bi bi-x-lg text-white fs-3"></i>
                            </button>
                        </div>
                        <div className="offcanvas-body pt-0">
                            <ul className="navbar-nav justify-content-end flex-grow-1">
                                <li className="nav-item ms-auto">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item ms-auto">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
