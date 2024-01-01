import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './MainPage';

import AboutProfessor from './components/pages/about/AboutProfessor'
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
                    <Route index element={<MainPage />} />
                    <Route path="/pages/about/about-professor" component={AboutProfessor} />
                    <Route path="/pages/research" component={Research} />
                    <Route path="/pages/publications" component={Publications} />
                    <Route path="/pages/members" component={Members} />
                    <Route path="/pages/admissions" component={Admissions} />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
