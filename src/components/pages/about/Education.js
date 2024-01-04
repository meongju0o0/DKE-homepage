import React from 'react';

import '../styles/Default.css';
import '../styles/Education.css';

export const Education = ({ department, school, degree, country, date }) => {
    return (
        <div className="education-container">
            <div className="school-info">
                <div className="edu-school">{school}</div>
                <div className="edu-degree">{degree} of {department}</div>
            </div>
            <div className="location-info">
                <div className="edu-country">{country}</div>
                <div className="edu-date">{date}</div>
            </div>
        </div>
    );
};
