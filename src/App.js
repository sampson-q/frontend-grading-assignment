// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import InstructorContactPage from "./pages/InstructorContactPage";
import MissingGradeForm from "./pages/MissingGrade";
import GradeReportPage from "./pages/GradeReportPage";
import HelpAndSupportPage from "./pages/HelpAndSupportPage";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div className="mb-28">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/icp" element={<InstructorContactPage />} />
                    <Route path="/rmg" element={<MissingGradeForm />} />
                    <Route path="/grp" element={<GradeReportPage />} />
                    <Route path="/contact" element={<HelpAndSupportPage />} />
                </Routes>
            </div>
            <div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;