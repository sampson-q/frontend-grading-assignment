import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Lec3img from '../assets/images/lec3.jpeg';
import Lec4img from '../assets/images/lec4.jpeg';
import Lec5img from '../assets/images/lec5.jpeg';
import Lec2img from '../assets/images/lecturer 2.jpeg';
import Lec1img from '../assets/images/lecturer1.jpeg';

const instructors = [
    { id: 1, name: 'Dwumfour Abdullai Aziz', email: 'adwumfour@ug.edu.gh', department: 'Computer Science', picture: Lec3img },
    { id: 2, name: 'DCOP Samuel Winful ', email: 'anyanfo@gmail.com ', department: 'Computer Science', picture: Lec2img },
    { id: 3, name: 'Ben-Bright Benuwa', email: 'benuwa778@gmail.com ', department: 'Computer Science', picture: Lec1img },
    { id: 4, name: 'Michael Agbo Tettey Soli', email: ': msoli@ug.edu.gh / agbotettey@gmail.com', department: 'Computer Science', picture: Lec4img },
    { id: 5, name: 'PBS', email: 'pbs@ug.edu.gh', department: 'Computer Science', picture: Lec5img },
    { id: 6, name: 'Mark Attah Mensah', email: 'markmenshah@ug.edu.gh.com', department: 'Computer Science', picture: Lec3img },


];

const InstructorContactPage = () => {
    const sendSimulatedEmail = (instructorName, instructorEmail) => {
        alert(`Sending email to ${instructorName} at ${instructorEmail}`);
    };

    return (
        <>
            <Navbar loggedIn={true} username={""} />
            <div className="container mx-auto mt-20 p-8 bg-white rounded-lg shadow">
                <h2 className="text-3xl font-semibold mb-6">Instructor Contact Page</h2>

                {instructors.map((instructor) => (
                    <div key={instructor.id} className="mb-8 p-4 border rounded-lg">
                        <img
                            src={instructor.picture}
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
                    <Button color="blue" handleClick={() => window.location.href = "/dashboard"}>&larr; Back</Button>
                </div>
            </div>
        </>
    );
};

export default InstructorContactPage;