import React from "react";
import Doctor from "../Assets/p3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();
 
  const handleBookAppointmentClick = () => {
    navigate("/Quest");
  };

  return (
    
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Êtes-vous Éligible ?</span>
        </h3>
        <p className="ba-description">
        Donner du sang est un acte de générosité qui peut sauver des vies. Avant de participer, assurez-vous de répondre aux critères d'éligibilité pour garantir la sécurité de tous. En rejoignant notre communauté de donneurs, vous contribuez à la santé publique.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#980808dd" }} /> Donnez en Toute Confiance
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#980808dd" }} /> Centres de Don à Votre Portée
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#980808dd" }} /> Assistance 24/7
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#980808dd" }} /> Rendez-vous Simplifiés
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Etes vous eligible?
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
