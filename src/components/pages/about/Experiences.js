import React from 'react';

import '../styles/Default.css';
import '../styles/Experiences.css';

export const Experiences = ({ department, company, position, country, date }) => {
    return (
        <div className="experience-container">
            <div className="location-info">
                <div className="exp-position">{position}</div>
                <div className="exp-country">{country}</div>
            </div>
            <div className="position-info">
                <div className="exp-company">{department}, {company}</div>
                <div className="exp-date">{date}</div>
            </div>
        </div>
    );
};
