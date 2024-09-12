
import React, { useState } from 'react';
import '../Styles/Signup.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationpassword, setConfirmationpassword] = useState("");
  const [codepostal, setCodepostal] = useState("");
  const [email, setEmail] = useState("");
  const [ddnaissance, setdDnaissance] = useState("");
  const [phonenumber, setphoneNumber] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmationError, setConfirmationError] = useState("");
  const [apiError, setApiError] = useState(""); // For handling API errors
  const [successMessage, setSuccessMessage] = useState(""); // For success messages

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Password validation
    const uppercasePattern = /[A-Z]/;
    const numberPattern = /\d/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (!uppercasePattern.test(value)) {
      setPasswordError("Password must contain at least one uppercase letter.");
    } else if (!numberPattern.test(value)) {
      setPasswordError("Password must contain at least one number.");
    } else if (!specialCharPattern.test(value)) {
      setPasswordError("Password must contain at least one special character.");
    } else if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmationChange = (e) => {
    const value = e.target.value;
    setConfirmationpassword(value);

    if (value !== password) {
      setConfirmationError("Passwords do not match.");
    } else {
      setConfirmationError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordError || confirmationError) {
      alert("Please fix the errors before submitting.");
      return;
    }

    const userData = {
      username,
      email,
      password,
      confirmationpassword,
      codepostal,
      ddnaissance,
      phonenumber,
    };

    try {
      const response = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) { 
        const errorData = await response.json();
        setApiError(errorData.message || "An error occurred during signup.");
      } else {
        const data = await response.json();
        setSuccessMessage("Account created successfully!");
        setApiError(""); // Clear any previous errors
      }
    } catch (error) {
      setApiError("An error occurred during signup. Please try again.");
    }  
  };

  return (
    <>
   <Navbar/>
    <div className="signup-container">
      <h2 className="signup-title">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmationpassword} 
            onChange={handleConfirmationChange} 
            required 
          />
          {confirmationError && <p className="error">{confirmationError}</p>}
        </div>
        <div className="input-group">
          <label>Phone Number:</label>
          <input 
            type="text" 
            value={phonenumber} 
            onChange={(e) => setphoneNumber(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Date of Birth:</label>
          <input 
            type="date" 
            value={ddnaissance} 
            onChange={(e) => setdDnaissance(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Postal Code:</label>
          <input 
            type="text" 
            value={codepostal} 
            onChange={(e) => setCodepostal(e.target.value)} 
            required 
          />
        </div>
        {apiError && <p className="error">{apiError}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}
