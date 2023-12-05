// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Adjust as needed

const Navbar = ({ loggedIn, username }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-2xl font-bold">Grade Tracker</Link>
        </div>
        <div className="flex items-center space-x-4">
          {loggedIn ? (<>
            <span className="text-white">Welcome, {username}!</span>
            <Link to="/" className="text-white">Logout</Link>
          </>
          ) : (
            <>
            <Link to="/login" className="text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4a8 8 0 018 8c0 2.501-.891 4.791-2.375 6.625M17.758 19.758A8 8 0 111.414 2.343 6 6 0 0010 14a6 6 0 004.242-1.758"
                ></path>
              </svg>
              Login
            </Link>
            <Link to="/faqs" className="text-white">FAQs</Link>
            <Link to="/contact" className="text-white">Contact Support</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
