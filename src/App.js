import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './MainPage';

import AboutProfessor from './components/pages/about/AboutProfessor'
import Missions from './components/pages/about/Missions'
import Research from './components/pages/research/Research'
import Publications from './components/pages/publications/Publications'
import Members from './components/pages/members/Members'
import Admissions from './components/pages/admissions/Admissions'


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/pages/about/about-professor" element={<AboutProfessor />} />
                    <Route path="/pages/about/missions" element={<Missions />} />
                    <Route path="/pages/research" element={<Research />} />
                    <Route path="/pages/publications" element={<Publications />} />
                    <Route path="/pages/members" element={<Members />} />
                    <Route path="/pages/admissions" element={<Admissions />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
