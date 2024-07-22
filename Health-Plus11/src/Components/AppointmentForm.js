import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../Assets/logo.jpg";  // Import the logo image

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [donorName, setDonorName] = useState("");
  const [donorNumber, setDonorNumber] = useState("");
  const [donorGender, setDonorGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!donorName.trim()) {
      errors.donorName = "Donor name is required";
    } else if (donorName.trim().length < 8) {
      errors.donorName = "Donor name must be at least 8 characters";
    }

    if (!donorNumber.trim()) {
      errors.donorNumber = "Donor phone number is required";
    } else if (donorNumber.trim().length !== 10) {
      errors.donorNumber = "Donor phone number must be of 10 digits";
    }

    if (donorGender === "default") {
      errors.donorGender = "Please select donor gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (!dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setDonorName("");
    setDonorNumber("");
    setDonorGender("default");
    setAppointmentTime("");
    setDateOfBirth("");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Bloodstream <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container">
        <div className="form-left">
          <h2 className="form-title">
            <span>Book Appointment Online</span>
          </h2>
          <form className="form-content" onSubmit={handleSubmit}>
            <label>
              Donor Full Name:
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                required
              />
              {formErrors.donorName && <p className="error-message">{formErrors.donorName}</p>}
            </label>

            <br />
            <label>
              Donor Phone Number:
              <input
                type="text"
                value={donorNumber}
                onChange={(e) => setDonorNumber(e.target.value)}
                required
              />
              {formErrors.donorNumber && <p className="error-message">{formErrors.donorNumber}</p>}
            </label>

            <br />
            <label>
              Donor Gender:
              <select
                value={donorGender}
                onChange={(e) => setDonorGender(e.target.value)}
                required
              >
                <option value="default">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="private">I will inform Doctor only</option>
              </select>
              {formErrors.donorGender && <p className="error-message">{formErrors.donorGender}</p>}
            </label>

            <br />
            <label>
              Fix an Appointment:
              <input
                type="datetime-local"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
                min={new Date().toISOString().slice(0, 16)} // Définit la date/heure minimale à maintenant
              />
              {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
            </label>

            <br />
            <label>
              Date of Birth:
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
              {formErrors.dateOfBirth && <p className="error-message">{formErrors.dateOfBirth}</p>}
            </label>

            <br />
            <button type="submit" className="text-appointment-btn">
              Confirm Appointment
            </button>

            <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>
              Appointment details have been sent to the donor's phone number via SMS.
            </p>
          </form>
        </div>
        <div className="form-right">
          <img src={logo} alt="Logo" className="logo-image"/>
        </div>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Bloodstream. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;















