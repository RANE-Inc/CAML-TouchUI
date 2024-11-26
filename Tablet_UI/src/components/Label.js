// src/components/Label.js
import React from 'react';

const Label = ({ htmlFor, className, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-lg font-medium text-gray-700 ${className}`} // Increased font size
    >
      {children}
    </label>
  );
};

export default Label;
