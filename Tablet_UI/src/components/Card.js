/// src/components/Card.js
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg ${className}`}
      style={{ width: '90vw', height: '90vh' }}
    >
      {children}
    </div>
  );
};

export default Card;
