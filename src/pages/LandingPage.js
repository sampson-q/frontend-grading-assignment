// HomePage.js

import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path based on your project structure
import Button from '../components/Button';

const LandingPage = () => {
    function navigateLogin() {
        window.location.href = "/login";
    }
    return (
        <div>
            <Navbar loggedIn={false} /> {/* Adjust loggedIn status */}
            <div className="container mx-auto my-auto mt-8 p-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-[-50px] mt-20">Welcome to the Missing Grade Reporting System</h1>
                    <div className="border border-gray-300 rounded-lg p-4 mt-20 w-[900px] mx-auto">
                        <p className="text-lg text-grey-600 mb-10">
                            The Missing Grade Reporting System is a purposeful and user-centric platform designed to empower students in managing their academic progress effectively. With a range of features, the system ensures transparency, communication, and proactive resolution of grade-related concerns. Happy exploring!
                        </p>

                        <div className="w-32 mx-auto">
                            <Button handleClick={navigateLogin}>Get Started!</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
