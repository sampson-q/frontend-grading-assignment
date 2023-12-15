import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

const MissingGradeForm = () => {
    const [formData, setFormData] = useState({
        studentId: '123123',
        courseName: '',
        instructorName: '',
        expectedGrade: '',
        description: '',
    });

    const [error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isFormValid = () => {
        return (
            formData.studentId &&
            formData.courseName &&
            formData.instructorName &&
            formData.expectedGrade &&
            formData.description
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            alert('Form submitted successfully!');
            window.location.reload();
        } else {
            setError('Please fill out all the required fields before submitting.');
        }
    };

    return (
        <>
            <Navbar loggedIn={true} username={"James Caster"} />
            <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 px-2 py-1">
                    <div className="sm:col-span-11">
                        <h2 className="text-3xl font-semibold mb-6 text-blue-500">Report Missing Grade</h2>
                    </div>
                    <div className="sm:col-span-1 w-20">
                        <Button color="blue" handleClick={() => window.location.href = "/dashboard"}>
                            &larr; Back
                        </Button>
                    </div>
                </div>

                <form>
                    {error && <ErrorMessage errorMessage={error} />}
                    <div className="grid grid-cols-1 gap-y-6 mt-5">
                        <div>
                            <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
                                Course Name
                            </label>
                            <input
                                type="text"
                                id="courseName"
                                name="courseName"
                                value={formData.courseName}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="instructorName" className="block text-sm font-medium text-gray-700">
                                Instructor Name
                            </label>
                            <input
                                type="text"
                                id="instructorName"
                                name="instructorName"
                                value={formData.instructorName}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="expectedGrade" className="block text-sm font-medium text-gray-700">
                                Expected Grade
                            </label>
                            <input
                                type="text"
                                id="expectedGrade"
                                name="expectedGrade"
                                value={formData.expectedGrade}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Explanation
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-6 w-32">
                        <Button handleClick={handleSubmit} color={isFormValid() ? 'blue' : 'gray'}>
                            Submit Report
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MissingGradeForm;