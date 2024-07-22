// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar'; 
// import Footer from '../Components/Footer';
// import "./Authuser.css";
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';


// const Authuser = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 'http://localhost:9090/api/auth/signin',
//                 { username, password },
//                 { withCredentials: true }
//             );
    
//             console.log('Response:', response); 
    
//             if (response.status === 200) {
//                 const data = response.data;
//                 localStorage.setItem('authToken', data.token); 
//                 navigate('/Home'); 
//             } else {
//                 setError('Nom d’utilisateur ou mot de passe incorrect'); 
//             }
//         } catch (error) {
//             console.error('Erreur lors de la connexion:', error);
//             const errorMessage = error.response?.data?.message || 'Erreur de connexion. Veuillez réessayer.';
//             setError(errorMessage);
//         }
//     };

import Navbar from '../Components/Navbar'; 
import Footer from '../Components/Footer';
import "./Authuser.css";
import { Link} from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect

export default function LoginView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false); // Add state for redirect

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9090/api/auth/signin", {
        username,
        password,
      });
      
      console.log("Login successful:", response.data);
      
      localStorage.setItem("access_token", response.data.access_token);

      setRedirect(true); 
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Incorrect username or password");
    }
  };

  // Render redirect if redirect state is true
  if (redirect) {
    return <Navigate to='/' replace />;
  }
    return (
        <div className="body">
            <Navbar />
            <div className="create-account-container">
                <h1>Vous n'avez pas encore de compte ?</h1>
                <p>Créez votre compte en quelques minutes à l'aide du mail utilisé lors de votre inscription à l'EFS</p>
                <Link to="/signup" className="create-account-btn">
                    JE CRÉE UN COMPTE
                </Link>
            </div>
        
            <div className="login-container">
                <h2>J'ai déjà un compte</h2>
                <p>Renseignez votre Gmail</p>
                <form onSubmit={handleLogin}>
                <div className="form-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="password-container">
                        <input
                            type='password'
                            placeholder="Mot de passe"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Se souvenir de moi</label>
                    </div>
                    <div className="login-links">
                        <a href="/">Mot de passe oublié</a>
                    </div>
                    <button type="submit" className="login-btn">JE M'IDENTIFIE</button>
                </form>
            </div>
            
            <Footer />
        </div>
    );
};

// export default Authuser; 

