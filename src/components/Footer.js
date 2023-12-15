import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-500">Facebook</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-500">Twitter</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-500">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
                    <p>Email: UGCS HELP DESK at servicedesk@ug.edu.gh </p>
                    <p>Phone: IP ext 3000.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;