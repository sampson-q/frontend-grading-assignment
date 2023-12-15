import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const HelpAndSupportPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleContactFormSubmit = (event) => {
        event.preventDefault();

        alert('Contact form submitted successfully!');
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
            <Navbar loggedIn={false} />
            <div className="container mx-auto mt-5 p-8 bg-white rounded-lg shadow">

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 px-2 py-1">
                    <div className="sm:col-span-11">
                        <h2 className="text-3xl font-semibold mb-6 text-blue-500">Help and Support</h2>
                    </div>
                    <div className="sm:col-span-1 w-20">
                        <Button color="blue" handleClick={() => window.location.href = "/dashboard"}>
                            &larr; Back
                        </Button>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Frequently Asked Questions (FAQ)</h3>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">
                            <span className="font-semibold">Q: How do I report missing grades?</span><br />
                            A: You can report missing grades on the <a href="/rmg">Report Missing Grades</a> page.
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">Q: Can I contact my instructor regarding grades?</span><br />
                            A: Yes, you can use the <a href="/icp">Contact Instructor</a> page for that purpose.
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Technical Support</h3>
                    <form onSubmit={handleContactFormSubmit}>
                        <div className="grid grid-cols-1 gap-y-6 mt-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows="4"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-6 w-32">
                            <Button type="submit" color="blue">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HelpAndSupportPage;