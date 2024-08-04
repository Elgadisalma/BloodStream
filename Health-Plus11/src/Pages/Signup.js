// import React, { useState } from 'react';
// import './RegisterForm.css'; 
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import axios from 'axios';

// const RegisterForm = () => {
//     const [name, setName] = useState('');
//     const [surname, setSurname] = useState('');
//     const [dob, setDob] = useState('');
//     const [postalCode, setPostalCode] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleRegister = async (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             setError('Les mots de passe ne correspondent pas');
//             return;
//         }

//         setLoading(true);

//         try {
//             const response = await axios.post('http://localhost:8080/api/auth/signup', {
//                 name,
//                 surname,
//                 dob,
//                 postalCode,
//                 email,
//                 phone,
//                 password
//             });

//             if (response.status === 200) {
//                 setSuccess('Inscription réussie ! Vous pouvez maintenant vous connecter.');
//                 setName('');
//                 setSurname('');
//                 setDob('');
//                 setPostalCode('');
//                 setEmail('');
//                 setPhone('');
//                 setPassword('');
//                 setConfirmPassword('');
//             } else {
//                 setError('Une erreur est survenue. Veuillez réessayer.');
//             }
//         } catch (error) {
//             console.error('Erreur lors de l\'inscription:', error);
//             setError('Erreur lors de l\'inscription. Veuillez réessayer.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="register-container">
//                 <h1>C’est votre 1ère connexion ?</h1>
//                 <p>Si vous êtes déjà donneur, créez votre compte à l'aide de l'email utilisé lors de votre don.</p>
//                 <form onSubmit={handleRegister}>
//                     <div className="input-box">
//                         <label>Votre nom</label>
//                         <input 
//                             type="text" 
//                             className="input-field" 
//                             placeholder="Mon nom de naissance" 
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required 
//                         />
//                     </div>
//                     <div className="input-box">
//                         <label>Votre prénom</label>
//                         <input 
//                             type="text" 
//                             className="input-field" 
//                             placeholder="Mon prénom" 
//                             value={surname}
//                             onChange={(e) => setSurname(e.target.value)}
//                             required 
//                         />
//                     </div>
//                     <div className="input-box">
//                         <label>Votre date de naissance</label>
//                         <input 
//                             type="text" 
//                             className="input-field" 
//                             placeholder="JJ/MM/AAAA" 
//                             value={dob}
//                             onChange={(e) => setDob(e.target.value)}
//                             required 
//                         />
//                     </div>
//                     <div className="input-box">
//                         <label>Code postal</label>
//                         <input 
//                             type="text" 
//                             className="input-field" 
//                             placeholder="Mon code postal" 
//                             value={postalCode}
//                             onChange={(e) => setPostalCode(e.target.value)}
//                             required 
//                         />
//                     </div>
//                     <div className="input-box">
//                         <label>Votre e-mail</label>
//                         <input 
//                             type="email" 
//                             className="input-field" 
//                             placeholder="Mon adresse e-mail" 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required 
//                         />
//                     </div>
//                     <div className="input-box">
//                         <label>Votre numéro de téléphone (facultatif)</label>
//                         <input 
//                             type="tel" 
//                             className="input-field" 
//                             placeholder="00 00 00 00 00" 
//                             value={phone}
//                             onChange={(e) => setPhone(e.target.value)}
//                         />
//                     </div>
//                     <div className="input-box">
//                         <label>Mot de passe*</label>
//                         <input 
//                             type="password" 
//                             className="input-field" 
//                             placeholder="Mon mot de passe" 
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required 
//                         />
//                     </div>
//                     <div className="input-box">
//                         <label>Confirmer votre mot de passe*</label>
//                         <input 
//                             type="password" 
//                             className="input-field" 
//                             placeholder="Ma confirmation de mot de passe" 
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required 
//                         />
//                     </div>
//                     <div className="input-box">
//                         <input 
//                             type="submit" 
//                             className="submit" 
//                             value={loading ? "Chargement..." : "S'inscrire"} 
//                             disabled={loading}
//                         />
//                     </div>
//                     {error && <p className="error-message">{error}</p>}
//                     {success && <p className="success-message">{success}</p>}
//                     <p className="note">*Champs obligatoires</p>
//                 </form>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    dateNaissance: '',
    codePostal: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    const { confirmPassword, ...dataToSend } = formData;

    try {
      const response = await axios.post('http://localhost:9090/api/auth/signup', dataToSend);
      console.log('Inscription réussie:', response.data);
      // Vous pouvez rediriger l'utilisateur ou afficher un message de succès ici
    } catch (error) {
      if (error.response) {
        console.error('Erreur lors de l\'inscription:', error.response.data);
        console.error('Statut:', error.response.status);
      } else if (error.request) {
        console.error('Aucune réponse reçue:', error.request);
      } else {
        console.error('Erreur:', error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
          required
        />
        <input
          type="date"
          name="dateNaissance"
          value={formData.dateNaissance}
          onChange={handleChange}
          placeholder="Date de naissance"
          required
        />
        <input
          type="text"
          name="codePostal"
          value={formData.codePostal}
          onChange={handleChange}
          placeholder="Code postal"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmer le mot de passe"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Numéro de téléphone"
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
