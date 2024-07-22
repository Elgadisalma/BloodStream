import React from 'react';

const Card = ({ children, ...props }) => {
  return (
    <div className="card" {...props}>
      {children}
    </div>
  );
};

export default Card;

export const CardHeader = ({ children, ...props }) => (
  <div className="card-header" {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, ...props }) => (
  <div className="card-title" {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, ...props }) => (
  <div className="card-content" {...props}>
    {children}
  </div>
);
