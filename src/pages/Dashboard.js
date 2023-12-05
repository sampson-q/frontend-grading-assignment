import React from 'react';
import Navbar from '../components/Navbar';

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
            <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-blue-500">Dashboard</h2>

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
                                <span className="font-semibold">{alert.course}:</span> {alert.alert}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
