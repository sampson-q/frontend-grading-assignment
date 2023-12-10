import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const GradeReportPage = () => {

    const gradeReportData = [
        { semester: '1st Semester', courses: [{ course: 'DCIT 201', grade: 'A' }, { course: 'DCIT 203', grade: 'B' }] },
        { semester: '2nd Semester', courses: [{ course: 'DCIT 202', grade: 'C' }, { course: 'DCIT 204', grade: 'A' }] },
    ];

    const [selectedSemester, setSelectedSemester] = useState('');

    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
    };

    const filteredGradeReportData = selectedSemester
        ? gradeReportData.filter((item) => item.semester === selectedSemester)
        : gradeReportData;

    return (
        <>
            <Navbar loggedIn={true} username={""} />
            <div className="container mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6">Grade Report</h2>

                { }
                <div className="mb-4">
                    <label htmlFor="semester" className="block text-sm font-medium text-gray-700">
                        Filter by Semester:
                    </label>
                    <select
                        id="semester"
                        name="semester"
                        className="mt-1 p-2 border rounded-md"
                        value={selectedSemester}
                        onChange={handleSemesterChange}
                    >
                        <option value="">All Semesters</option>
                        {gradeReportData.map((item, index) => (
                            <option key={index} value={item.semester}>
                                {item.semester}
                            </option>
                        ))}
                    </select>
                </div>

                { }
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">Semester</th>
                            <th className="p-2 border">Course</th>
                            <th className="p-2 border">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGradeReportData.map((semesterData, semesterIndex) => (
                            <React.Fragment key={semesterIndex}>
                                <tr>
                                    <td className="p-2 border" rowSpan={semesterData.courses.length + 1}>
                                        {semesterData.semester}
                                    </td>
                                </tr>
                                {semesterData.courses.map((course, courseIndex) => (
                                    <tr key={courseIndex}>
                                        <td className="p-2 border">{course.course}</td>
                                        <td className="p-2 border">{course.grade}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>

                { }
                <div className="mt-8">
                    <Button handleClick={() => window.history.back()}>Back</Button>
                </div>
            </div>
        </>
    );
};

export default GradeReportPage;
