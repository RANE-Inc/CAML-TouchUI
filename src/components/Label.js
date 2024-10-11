// src/components/Label.js
import React from 'react';

const Label = ({ htmlFor, className, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
