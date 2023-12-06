// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import InstructorContactPage from "./pages/InstructorContactPage";
import MissingGradeForm from "./pages/MissingGrade";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/icp" element={<InstructorContactPage />} />
                    <Route path="/rmg" element={<MissingGradeForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;