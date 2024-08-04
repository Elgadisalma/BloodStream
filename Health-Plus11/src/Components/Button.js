import React from 'react';
import{Link} from "react-router-dom";
import "../Styles/Button.css";
const Button = () => {
    return (
        <Link to  ="/login">
       <button className='btn'>Sign in</button>
        </Link>
    );
}

export default Button;
