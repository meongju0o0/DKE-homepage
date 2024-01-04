import React from 'react';

import '../styles/Default.css';
import '../styles/AboutProfessor.css';


const AboutProfessor = () => {
    return (
        <div className="wrapper">
            <div className="main-content">
                <div className = "intro">
                    <div className="img-intro">
                        <img src="/images/profile-images/professor.png" alt="Prof. Young-Koo Lee"/>
                    </div>
                    <div className="text-intro">
                        <h2>Prof. Young-Koo Lee</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutProfessor;
