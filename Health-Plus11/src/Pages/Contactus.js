import React from 'react';
import ContactSection from '../Components/ContactSection';
import '../Styles/Contact.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contactus = () => {
    return (
        <div className="App">
            <Navbar/>
            <ContactSection />
            <Footer/>
        </div>
    );
};

export default Contactus;
