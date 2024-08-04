import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
    return (
        <div className="contactInfo">
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                <div className="text">
                    <h3>Address</h3>
                    <p>Lotissement PALM VIEW Lot N° 49 MARRAKECH PREFECTURE DE MARRAKECH ARRONDISSEMENT DE GUELIZ</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>qchiine.chaimaa@gmail.com</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>+212 775.403.000</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
