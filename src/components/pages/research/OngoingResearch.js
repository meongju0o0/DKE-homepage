import React from 'react';

import '../styles/Default.css';
import GNN from '../../../assets/images/projects/gnn.png';
import DistLearning from '../../../assets/images/projects/distributed-training.png';

const OngoingResearch = () => {
    return (
        <div className="wrapper">
            <div className="main-content">
                <div className="section">
                    <h2>Ongoing Projects</h2>
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
                            <p>SQL Script optimization over optimal replica configuration considers two objectives for performance maximization: minimizing the total response time and the total amount used replica over cloud ERNs. However, modern database cloud services provide another objective: minimizing the price of using cloud ERNs. Sometimes, performance maximization causes a high resource/ computation price.</p>
                            <p>It is very challenging to maintain the total cost of ownership (TCO) that provide less resource, less human effort, and serverless service. Thus, the problem becomes price minimization and performance maximization of SQL Script over cloud ERNs.</p>
                            <p>In existing works, response time and monetary cost-aware optimization focus only on declarative queries on the cloud database system. To the best of our knowledge, we are the first to propose response time and monetary cost-aware UDF/SQL Script optimization that consider both imperatives and declaratives over cloud ERNs.</p>
                            <p>To meet the objectives, the challenges are: estimating candidate total monetary costs based on user demand, designing multiple-level optimizers to provide Optimizer-as-a-Service (OaaS) e.g., α-optimizer (cheap, low performance), β-optimizer (middle price/performance), γ-optimizer (expensive, best performance), weighting the query/SQL Script to trade-off price and optimization quality. In order to optimize SQL Script over cloud ERNs by handling resource/ computation prices, we need a cost model for resource/ computation prices.</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OngoingResearch
