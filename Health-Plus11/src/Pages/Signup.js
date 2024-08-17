// import React, { useState } from 'react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom'; 

// const Signup = () => {
//   const [redirect, setRedirect] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '',
//     dateNaissance: '',
//     codePostal: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phoneNumber: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert('Les mots de passe ne correspondent pas');
//       return;
//     }

//     const { confirmPassword, ...dataToSend } = formData;

//     try {
//       const response = await axios.post('http://localhost:9090/api/auth/signup', dataToSend);
//       console.log('Inscription réussie:', response.data);
//       localStorage.setItem("access_token", response.data.access_token);
//       setRedirect(true); 
//       // Vous pouvez rediriger l'utilisateur ou afficher un message de succès ici
//     } catch (error) {
//       if (error.response) {
//         console.log('Erreur lors de l\'inscription:', error.response.data);
//         console.log('Statut:', error.response.status);
//       } else if (error.request) {
//         console.log('Aucune réponse reçue:', error.request);
//       } else {
//         console.error('Erreur:', error.message);
//       }
//     }
//   };
//   if (redirect) {
//     return <Navigate to='/' replace />;
//   }

//   return (
//     <div className="signup-container">
//       <h2>Inscription</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="Nom d'utilisateur"
//           required
//         />
//         <input
//           type="date"
//           name="dateNaissance"
//           value={formData.dateNaissance}
//           onChange={handleChange}
//           placeholder="Date de naissance"
//           required
//         />
//         <input
//           type="text"
//           name="codePostal"
//           value={formData.codePostal}
//           onChange={handleChange}
//           placeholder="Code postal"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Mot de passe"
//           required
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           placeholder="Confirmer le mot de passe"
//           required
//         />
//         <input
//           type="text"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Numéro de téléphone"
//           required
//         />
//         <button type="submit">S'inscrire</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
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
