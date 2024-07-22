import React from 'react';

const Input = ({ type = 'text', placeholder = '', ...props }) => {
  return (
    <input type={type} placeholder={placeholder} {...props} />
  );
};

export default Input;
