import React from 'react';

import '../styles/Default.css';
import '../styles/AboutProfessor.css';


const AboutProfessor = () => {
    return (
        <div className="wrapper">
            <div className="main-content">
                <div className="intro">
                    <div className="img-intro">
                        <img className="intro" src="/images/profile-images/professor.png" alt="Prof. Young-Koo Lee"/>
                    </div>
                    <div className="text-intro">
                        <h2>Dr. Lee, Young-Koo</h2>
                        <h3 style={ {marginTop: '0px'} }>Professor, Laboratory Advisor</h3>
                        <hr style={ {marginTop: '0px', border: 'solid 1px #999'} }/>
                        
                        <h4 className="intro">Address</h4>
                        <p className="intro">College of Electronics Information and Applied Science,</p>
                        <p className="intro">Kyung Hee University (Global Campus),</p>
                        <p className="intro">1732, Deogyeong-daero, Giheung-gu, Yongin-si, Gyeonggi-do 17104,</p>
                        <p className="intro">Republic of Korea</p>
                        
                        <h4 className="intro">Contact Information</h4>
                        <p className="intro">Call: +82 31 201 3732</p>
                        <p className="intro">Email: yklee@khu.ac.kr</p>
                    </div>
                </div>
                <div className="section">
                    <ul>
                        <p>Young-Koo Lee, Ph.D. is a full professor at Kyung Hee University, leading the Data & Knowledge Engineering Laboratory. He received B.S., Master, Ph.D. degree in Computer Science from Korea Advanced Institute of Science and Technology (KAIST); has been worked on University of Illinois at Urbana-Champaign, Postdoctoral Research Associate.</p>
                        <p>Now, he is working on Kyung Hee University, full professor and dean of Software Convergence College. He also has leaded the Data & Knowledge Engineering Laboratory almost 20 years. His research interests include Data Mining, Distributed Data Processing, Query Optimization, Graph Neural Networks and Emotion Detection. And he has activities in Publication, eProceedings, Organization Co-Chair like EDB, DASFAA, VLDB and etc. He also has reviewed a lot of papers in IEEE, ACM, IEICE.</p>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutProfessor;
