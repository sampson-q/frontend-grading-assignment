import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Dashboard = () => {
    // Placeholder data for demonstration
    const currentGrades = [
        { course: 'Math', grade: 'A' },
        { course: 'English', grade: 'B' },
        { course: 'History', grade: 'C' },
    ];

    const missingGradesAlerts = [
        { course: 'Physics', alert: 'Missing Grade' },
        { course: 'Chemistry', alert: 'Missing Grade' },
    ];

    return (
        <>
            <Navbar loggedIn={true} username={"Dorinda Kpo"} />
            <div className="container mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>

                {/* Display Current Grades */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Current Grades</h3>
                    <ul className="list-disc pl-6">
                        {currentGrades.map((grade, index) => (
                            <li key={index} className="mb-2">
                                <span className="font-semibold">{grade.course}:</span> {grade.grade}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Display Alerts for Missing Grades */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Missing Grades Alerts</h3>
                    <ul className="list-disc pl-6">
                        {missingGradesAlerts.map((alert, index) => (
                            <li key={index} className="mb-2">
                                <span className="font-semibold">{alert.course}: </span>
                                {alert.alert} {' '}
                                {alert.alert === 'Missing Grade' && (
                                    <span className="text-red-500">!</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Buttons for Reporting Missing Grades and Contacting Instructor */}
                <div className="flex items-center mt-8 grid grid-cols-1 sm:grid-cols-3">
                    <div className='mx-auto w-48'>
                        <Button color="green" handleClick={() => window.location.href = "/rmg"}>
                            Report Missing Grades
                        </Button>
                    </div>

                    <div className='mx-auto w-48'>
                        <Button handleClick={() => window.location.href = "/icp"}>
                            Contact Instructor
                        </Button>
                    </div>
                    
                    <div className='mx-auto w-48'>
                        <Button color="green" handleClick={() => window.location.href = "/grp"}>
                            Grade Report Page
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
