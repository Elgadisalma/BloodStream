import React, { useState } from 'react';
import '../Styles/Quest.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate  } from "react-router-dom";
const Questionnaire = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        weight: '',
        healthStatus: '',
        lastTravel: '',
        medications: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted!'); // Replace with actual validation and feedback
        navigate("/");
    };

    return (
        <>
        <Navbar/>
        <div className="questionnaire-container">
            <h2>Blood Donation Eligibility Questionnaire</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Weight (kg)</label>
                    <input 
                        type="number" 
                        id="weight" 
                        name="weight" 
                        value={formData.weight} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="healthStatus">General Health Status</label>
                    <textarea 
                        id="healthStatus" 
                        name="healthStatus" 
                        value={formData.healthStatus} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastTravel">Last Travel (Country and Date)</label>
                    <input 
                        type="text" 
                        id="lastTravel" 
                        name="lastTravel" 
                        value={formData.lastTravel} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="medications">Medications Taken</label>
                    <textarea 
                        id="medications" 
                        name="medications" 
                        value={formData.medications} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default Questionnaire;
