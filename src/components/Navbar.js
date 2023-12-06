import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-blue-500 p-4">
                <div className="flex items-center justify-between">
                    <div className="text-white text-2xl font-bold">Grade Tracker</div>
                    <div className="flex items-center">
                        {/* Move the links here, outside of the responsive container */}
                        <div className="text-white sm:flex hidden">
                            <Link to="/" className="text-white ml-4">Home</Link>
                            <Link to="/login" className="text-white ml-4">Login</Link>
                            <Link to="/faqs" className="text-white ml-4">FAQs</Link>
                            <Link to="/contact" className="text-white ml-4">Contact Support</Link>
                        </div>
                        <button className="text-white lg:hidden" onClick={toggleSidebar}>☰</button>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 overflow-hidden z-50">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={closeSidebar}
                    ></div>
                    <div className="fixed inset-y-0 right-0 flex max-w-xs w-full bg-gray-800 p-4">
                        {/* Sidebar Content */}
                        <div className="w-full text-white">
                            <div className="flex justify-end mb-4">
                                <button className="text-white" onClick={closeSidebar}>
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
                            <Link to="/" className="mb-4 block">Home</Link>
                            <Link to="/login" className="mb-4 block">Login</Link>
                            <Link to="/faqs" className="mb-4 block">FAQs</Link>
                            <Link to="/contact" className="mb-4 block">Contact Support</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
