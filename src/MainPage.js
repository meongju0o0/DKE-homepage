import React from 'react';
import './styles/MainPage.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';


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
