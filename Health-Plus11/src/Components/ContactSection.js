import React from 'react';
import ContactInfo from '../Components/Contactinfo';
import ContactForm from '../Components/Contactform';

const ContactSection = () => {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>Nous sommes là pour vous aider ! Si vous avez des questions, des préoccupations ou des commentaires, n'hésitez pas à nous contacter. Notre équipe de support est disponible pour vous assister avec tout ce dont vous avez besoin.</p>
            </div>
            <div className="container">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;
