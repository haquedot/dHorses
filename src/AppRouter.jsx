// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
// import BookingForm from './pages/BookingForm';
// import NotFound from './pages/NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dHorses" element={<Home />} />
                <Route path="/dHorses/about" element={<About />} />
                <Route path="/dHorses/contact" element={<Contact />} />
                <Route path="/dHorses/signin" element={<Signin/>} />

                {/* <Route path="/book" element={<BookingForm />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
