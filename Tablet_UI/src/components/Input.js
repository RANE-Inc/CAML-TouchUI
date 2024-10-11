// src/components/Input.js
import React from 'react';

const Input = ({ id, type = 'text', className, placeholder, ...props }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
      {...props}
    />
  );
};

export default Input;
