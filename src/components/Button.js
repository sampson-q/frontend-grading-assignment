// Button.js

import React from 'react';

const Button = ({ children, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`font-bold rounded-md text-md text-center bg-blue-500 p-2 text-white`}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </div>
  );
};

export default Button;