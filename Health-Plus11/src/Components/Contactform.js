import React from 'react';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thanks for your contact');
    };

    return (
        <div className="contactForm">
            <form onSubmit={handleSubmit}>
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input type="text" required />
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="email" required />
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea required></textarea>
                    <span>Type Your Message...</span>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
