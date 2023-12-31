import React from 'react';
import '../styles/MainContent.css';
import { Slider } from './Slider';

import IITP from '../assets/images/sponsors/IITP.jpg';
import ETRI from '../assets/images/sponsors/ETRI.png';
import SAP from '../assets/images/sponsors/SAP.jpg';
import POSTECH from '../assets/images/sponsors/POSTECH.png';
import KNU from '../assets/images/sponsors/KNU.png';


export const MainContent = () => {
    const imageURL = '/images/group-photos/';
    const images = [
        imageURL+'img1.jpg',
        imageURL+'img2.png',
        imageURL+'img3.png',
        imageURL+'img4.png',
        imageURL+'img5.png'
    ];

    return (
        <div> {
            <div className="main-content">
                <Slider images={images} />
                <div className="section">
                    <h1>Data & Knowledge Engineering Laboratory</h1>
                    <p>Welcome to Data & Knowledge Engineering Laboratory, a place where the pursuit of knowledge and technological advancements merge, opening the doors to new discoveries and transformative innovations. Our laboratory is a melting pot of intellectuals and enthusiasts who share a passion for harnessing the power of data, utilizing it to derive insights, make informed decisions, and ultimately, contribute to creating a better future.</p>
                    <p>At the core of work is the study of complex data systems, the creation and optimization of learning algorithms, and the exploration of the intricate relationship between data and human emotion. We work with Graph Neural Networks (GNNs), engage in Distributed Training, optimize In-Memory Database Procedures, and delve into the realm of Emotion Detection.</p>
                </div>

                <div className="section">
                    <h2>Our Research Topics</h2>
                    <ul>
                        <li>In-Memory RDBMS Query Optimization</li>
                        <li>Graph Neural Network Learning Engine Development</li>
                        <li>Distributed Deep Learning Engine Development</li>
                        <li>Development of Search Engine with Natural Language Processing</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Latest News</h2>
                    <ul>
                        <li>(2023) Juyeong Shin won Top Award at Korea Software Congress.</li>
                        <li>(2023) Tangina Sultana and Muhamad Umair won Excellence Award at Korea DataBase Conference.</li>
                        <li>(2021) Tangina Sultana got Best Paper Award 2nd place in IEEE BigComp.</li>
                        <li>(2021) Tangina Sultana, Mostofa Kamal Rasel, Aftab Alam won Excellence Award in Korea DataBase Conference.</li>
                        <li>(2021) Aftab Alam, Muhammad Numan Khan, Tariq Afridi, Tangina Sultana won Top Award in Korea DataBase Conference.</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Recruitment</h2>
                    <p>We are looking for graduate students to research together in Data and Knowledge Engineering Laborotry at Computer Science and Engineering, Kyung Hee University.</p>
                    <p>In our lab, we always greets self-motivated students. and also greets for who is interested in high-speed data processing and artificial intelligence.</p>
                    <p>If you are interested in our research fields, please contact Prof. Young-Koo Lee (yklee@khu.ac.kr)</p>
                    <p>Thank you.</p>
                </div>

                <div className="section">
                    <h2>Partners</h2>
                    <img className="sponsor" src={IITP} alt="IITP" />
                    <img className="sponsor" src={ETRI} alt="ETRI" />
                    <img className="sponsor" src={SAP} alt="SAP" />
                    <img className="sponsor" src={POSTECH} alt="POSTECH" />
                    <img className="sponsor" src={KNU} alt="KNU" />
                </div>
            </div>
        }
        </div>
    );
};
