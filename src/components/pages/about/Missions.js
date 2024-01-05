import React from 'react';

import '../styles/Default.css';
import '../styles/Missions.css';
import GNN from '../../../assets/images/projects/gnn.png';
import DistLearning from '../../../assets/images/projects/distributed-training.png';


const Missions = () => {
    return (
        <div className="wrapper">
            <div className="main-content">
                <div className="section">
                    <h2>Vision</h2>
                    <p>Our vision is to be at the forefront of research in data and knowledge engineering, breaking down complex data patterns and transforming them into accessible and actionable knowledge.</p>
                    <p>We aim to be pioneers, driving the future of technology and shaping societal understanding of how data can be leveraged for good.</p>
                </div>

                <div className="section">
                    <h2>Missions</h2>
                    <div className="section">
                        <ul>
                            <h3>Graph Neural Network</h3>
                            <img src={GNN} alt="GNN" />
                            <p>In the realm of Graph Neural Networks, we aim to improve the understanding and utilization of these networks. Our goal is to enhance their capacity to predict and interpret the dependencies among nodes in graph-structured data, thereby enabling more accurate predictions and deeper insights across various applications, including social network analysis, bioinformatics, and recommendation systems.</p>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <h3>Distributed Learning Engine</h3>
                            <img src={DistLearning} alt="DistLearning" />
                            <p>As part of our work on Distributed Training, we seek to revolutionize the scalability and performance of machine learning algorithms. By training these algorithms across multiple servers or nodes, we aim to enhance the speed and sophistication of data processing and model training.</p>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <h3>In-Memory DBMS Query Optimization</h3>
                            {/*<img src={ } alt="DBMS" />*/}
                            <p>When it comes to In-Memory Database Procedure Optimization, we are committed to refining these procedures for improved efficiency and speed. Our work is focused on creating innovative methods that can enhance transaction speeds and promote better usage of resources.</p>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <h3>Natural Language Based Searching Engine Development</h3>
                            {/*<img src={ } alt="NLP" />*/}
                            <p>Finally, our research into Emotion Detection is dedicated to understanding and interpreting human emotions more accurately. Utilizing advanced machine learning and natural language processing techniques, we are working to create systems that can empathetically and accurately respond to human emotions.</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Missions;
