import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

const Login = () => {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleLogin(e) {
        e.preventDefault();

        // Basic form validation
        if (!studentId || !password) {
            setError('Please enter both Student ID and Password.');
            return;
        }

        // Simulate login logic (replace with actual authentication)
        if (studentId === '123123' && password === 'asdasd') {
            window.location.href = "/dashboard";
            setError('');
        } else {
            // Failed login logic
            setError('Invalid Student ID or Password. Please try again.');
        }
    }

    return (
        <div>
            <Navbar loggedIn={false} />

            <form>
                <div className="mx-auto w-[800px] mt-20 border-b border-gray-900/10 pb-12">
                    <h2 className="font-semibold text-gray-900 text-2xl">Login</h2>

                    {error && <ErrorMessage errorMessage={error}/>}

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="student-id" className="block text-sm font-medium leading-6 text-gray-900">
                                Student ID
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="student-id"
                                    id="student-id"
                                    autoComplete="given-name"
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[100px] mt-10">
                        <Button handleClick={handleLogin}>Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
