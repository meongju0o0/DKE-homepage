import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './MainPage';

import AboutProfessor from './components/pages/about/AboutProfessor'
import Missions from './components/pages/about/Missions'
import Contact from './components/pages/about/Contact'

import PastResearch from './components/pages/research/PastResearch'
import OngoingResearch from './components/pages/research/OngoingResearch'

import DomesticConference from './components/pages/publications/DomesticConference'
import DomesticJournal from './components/pages/publications/DomesticConference'
import InternationalConference from './components/pages/publications/InternationalConference'
import InternationalJournal from './components/pages/publications/InternationalJournal'

import Doctoral from './components/pages/members/Doctoral'
import Master from './components/pages/members/Master'
import Bachelor from './components/pages/members/Bachelor'
import Allumni from './components/pages/members/Allumni'


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route path="/pages/about/about-professor" element={<AboutProfessor />} />
                    <Route path="/pages/about/missions" element={<Missions />} />
                    <Route path="/pages/about/contact" element={<Contact />} />

                    <Route path="/pages/research/past-research" element={<PastResearch />} />
                    <Route path="/pages/research/ongoing-research" element={<OngoingResearch />} />

                    <Route path="/pages/publications/domestic-conference" element={<DomesticConference />} />
                    <Route path="/pages/publications/domestic-journal" element={<DomesticJournal />} />
                    <Route path="/pages/publications/international-conference" element={<InternationalConference />} />
                    <Route path="/pages/publications/international-journal" element={<InternationalJournal />} />

                    <Route path="/pages/members/doctoral" element={<Doctoral />} />
                    <Route path="/pages/members/master" element={<Master />} />
                    <Route path="/pages/members/bachelor" element={<Bachelor />} />
                    <Route path="/pages/members/alumni" element={<Allumni />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
