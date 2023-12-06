import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, username }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-white text-2xl font-bold">Grade Tracker</Link>
          </div>
          <div className="flex items-center space-x-4">
            {loggedIn ? (
              <>
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
          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-white focus:outline-none"
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          {/* Sidebar Content */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center h-full">
            {/* Sidebar Links */}
            <ul className="text-white text-xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Support</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;