import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Dashboard = () => {

    const currentGrades = [
        { course: 'DCIT 201 Programming 1', grade: 'A' },
        { course: 'DCIT 203 Digital and Logic Systems Design', grade: 'B' },
        { course: 'DCIT 205 Multimedia and Web Design', grade: 'C' },
        { course: 'DCIT 207 Computer Organisation and Architecture', grade: 'C' },
        { course: 'DCIT 209 E Business Architecture', grade: ' ' },

    ];

    const missingGradesAlerts = [
        { course: 'DCIT 209 E Business Architecture', alert: 'Missing Grade' },
        { course: 'CBAS 210 Academic Writing 2', alert: 'Missing Grade' },
    ];

    return (
        <>
            <Navbar loggedIn={true} username={"James Caster"} />
            <div className="container mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>

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
