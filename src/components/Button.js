import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({children}) => {
    return (
        <div>
            <Link className={`font-bold container mx-auto rounded-md text-lg bg-blue-500 p-2 text-white`} to="/login">{children}</Link>
        </div>
    );
}

export default Button;