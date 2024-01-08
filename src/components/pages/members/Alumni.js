import React from 'react';
import { AlumniList } from './AlumniList';

import '../styles/Default.css';
import '../styles/Alumni.css'
import AlumniData from '../../../assets/alumni.json';


const Alumni = () => {
    return (
        <div className="wrapper">
            <div className="main-content">
                <h1>Doctoral Alumni</h1>
                <AlumniList memberInfo={AlumniData['doctoral-alumni']} />
                <h1 style={{marginTop: '64px'}}>Master Alumni</h1>
                <AlumniList memberInfo={AlumniData['master-alumni']} />
                <h1 style={{marginTop: '64px'}}>Bachelor Alumni</h1>
                <AlumniList memberInfo={AlumniData['bachelor-alumni']} />
            </div>
        </div>
    )
}

export default Alumni;
