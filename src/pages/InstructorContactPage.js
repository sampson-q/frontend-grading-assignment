import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const instructors = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', department: 'Computer Science', picture: 'john_doe.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', department: 'Mathematics', picture: 'jane_smith.jpg' },
    // Add more instructors as needed
];

const InstructorContactPage = () => {
    const sendSimulatedEmail = (instructorName, instructorEmail) => {
        // Simulate sending an email (you can customize this logic as needed)
        alert(`Sending email to ${instructorName} at ${instructorEmail}`);
    };

    return (
        <>        
            <Navbar loggedIn={true} username={"Dorinda Kpo"} />
            <div className="container mx-auto mt-20 p-8 bg-white rounded-lg shadow">
                <h2 className="text-3xl font-semibold mb-6">Instructor Contact Page</h2>

                {instructors.map((instructor) => (
                    <div key={instructor.id} className="mb-8 p-4 border rounded-lg">
                        <img
                            src={instructor.picture} // Replace with the actual path to the instructor's picture
                            alt={instructor.name}
                            className="w-20 h-20 rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold">{instructor.name}</h3>
                        <p className="text-gray-600 mb-2">{instructor.department}</p>
                        <p className="text-gray-600 mb-4">{instructor.email}</p>
                        <button
                            onClick={() => sendSimulatedEmail(instructor.name, instructor.email)}
                            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
                        >
                            Send Simulated Email
                        </button>
                    </div>
                ))}
                <div className='w-20 mt-40'>
                    <Button color="blue" handleClick={() => window.location.href="/dashboard"}>&larr; Back</Button>
                </div>
            </div>
        </>
    );
};

export default InstructorContactPage;