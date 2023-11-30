import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from "./assets/particlesConfig.json";
import './MainPage.css';
import IITP from './assets/images/sponsors/IITP.jpg';
import ETRI from './assets/images/sponsors/ETRI.png';
import SAP from './assets/images/sponsors/SAP.jpg';
import POSTECH from './assets/images/sponsors/POSTECH.png';
import KNU from './assets/images/sponsors/KNU.png';

function MainPage() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const particlesOptions = particlesConfig

    return (
        <div>
            <div className="header">
                <Particles id="Particles" init={particlesInit} loaded={particlesLoaded} options={particlesOptions}/>
                <div className="header-content">
                    <a href="./index.html">
                        <h1>Data & Knowledge Engineering Lab.</h1>
                    </a>
                </div>
            </div>

            <div className="wrapper">
                <div className="main-content">
                    <div className="section">
                        <h2>Data & Knowledge Engineering Lab.</h2>
                        <p>Welcome to our Data & Knowledge Engineering Laboratory, a place where the pursuit of knowledge and technological advancements merge, opening the doors to new discoveries and transformative innovations. Our laboratory is a melting pot of intellectuals and enthusiasts who share a passion for harnessing the power of data, utilizing it to derive insights, make informed decisions, and ultimately, contribute to creating a better future.</p>
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
            </div>
        </div>
    );
}

export default MainPage;
