import React from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

import './styles/MainPage.css';


function MainPage() {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <MainContent />
            </div>
        </div>
    );
}

export default MainPage;
