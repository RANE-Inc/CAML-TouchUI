// ...src/components/Button.js
import React from 'react';

const Button = ({ type = 'button', className, children, ...props }) => {
  return (
    <button
      type={type}
      className={`group relative w-full flex justify-center py-10 px-8 border border-transparent text-5xl font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

