// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <Router>
            <div>
                <LandingPage />
                <div className="pageContent">
                    <Routes>
                        {/* <Route path="/about" element={<About />} /> */}
                    </Routes>
                </div>
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;