// Button.js

import React from 'react';

const Button = ({ children, handleClick, color }) => {
  return (
    <div
      onClick={handleClick}
      className={`font-bold rounded-md text-md text-center bg-blue-500 p-2 text-white`}
      style={{ cursor: 'pointer', backgroundColor: color != undefined ? color : 'blue'}}
    >
      {children}
    </div>
  );
};

export default Button;