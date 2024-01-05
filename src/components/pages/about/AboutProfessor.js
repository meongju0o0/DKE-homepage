import React from 'react';

import { Education } from './Education';
import { Experiences } from './Experiences';
import '../styles/Default.css';
import '../styles/AboutProfessor.css';


const AboutProfessor = () => {
    return (
        <div className="wrapper">
            <div className="main-content">
                <div className="intro">
                    <div className="img-intro">
                        <img className="intro" src="/images/profile-images/professor.png" alt="Prof. Young-Koo Lee" />
                    </div>
                    <div className="text-intro">
                        <h2>Dr. Lee, Young-Koo</h2>
                        <h3 style={ {marginTop: '0px'} }>Professor, Laboratory Advisor</h3>
                        <hr/>
                        
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
                <br />
                <div className="section">
                    <h3 className="intro">Biography</h3>
                    <ul>
                        <p>Young-Koo Lee, Ph.D. is a full professor at Kyung Hee University, leading the Data & Knowledge Engineering Laboratory. He received B.S., Master, Ph.D. degree in Computer Science from Korea Advanced Institute of Science and Technology (KAIST); has been worked on University of Illinois at Urbana-Champaign, Postdoctoral Research Associate.</p>
                        <p>Now, he is working on Kyung Hee University, full professor and dean of Software Convergence College. He also has leaded the Data & Knowledge Engineering Laboratory almost 20 years. His research interests include Data Mining, Distributed Data Processing, Query Optimization, Graph Neural Networks and Emotion Detection. And he has activities in Publication, eProceedings, Organization Co-Chair like EDB, DASFAA, VLDB and etc. He also has reviewed a lot of papers in IEEE, ACM, IEICE.</p>
                    </ul>
                </div>
                <div className="section">
                    <h3 className="intro">Education</h3>
                    <ul>
                        <Education department = { "Computer Science" } school = { "Korea Advanced Institute of Science and Technology" } degree = { "Doctoral Degree" } country = { "Daejeon, Republic of Korea" } date = { "Mar. 1994 - Feb. 2002" } />
                        <hr/>
                        <Education department = { "Computer Science" } school = { "Korea Advanced Institute of Science and Technology" } degree = { "Master Degree" } country = { "Daejeon, Republic of Korea" } date = { "Mar. 1992 - Feb. 1994" } />
                        <hr/>
                        <Education department = { "Computer Science" } school = { "Korea Advanced Institute of Science and Technology" } degree = { "Bachelor Degree" } country = { "Daejeon, Republic of Korea" } date = { "Mar. 1988 - Feb. 1992" } />
                    </ul>
                </div>
                <div className="section">
                    <h3 className="intro">Professional Experiences</h3>
                    <ul>
                        <Experiences department = { "Department of Computer Science and Engineering" } company = { "Kyung Hee University" } position = { "Professor" } country = { "Yong-In, Korea" } date = { "Mar. 2015 - present" } />
                        <hr/>
                        <Experiences department = { "Department of Computer Science and Engineering" } company = { "Kyung Hee University" } position = { "Associate Professor" } country = { "Yong-In, Korea" } date = { "Mar. 2010 - Feb. 2015" } />
                        <hr/>
                        <Experiences department = { "Department of Computer Science and Engineering" } company = { "Kyung Hee University" } position = { "Assistant Professor" } country = { "Yong-In, Korea" } date = { "Mar. 2004 - Feb. 2010" } />
                        <hr/>
                        <Experiences department = { "Department of Computer Engineering" } company = { "University of Illinois at Urbana-Champaign" } position = { "Postdoctoral Research Associate" } country = { "Illinois, USA" } date = { "Sep. 2002 - Feb. 2004" } />
                        <hr/>
                        <Experiences department = { "Adavanced Information Technology Research Center(AITrc)" } company = { "KAIST" } position = { "Post Doctoral Fellow" } country = { "Daejeon, Korea" } date = { "Mar. 2002 - Feb. 2004" } />
                    </ul>
                </div>
                <div className="section">
                    <h3 className="intro">Teaching</h3>
                    <ul>
                        <h4>Database</h4>
                        <p>This course is to provide the basic understanding about database systems and introduce database design techniques based on ER-model and relational data model. It also deals with theoretical issues for implementing DBMS(Data Base Management System) such as concurrency control, recovery, and transactions managements.</p>
                        <h4>Capstone Design</h4>
                        <p>This course offers students an opportunity to study new and various subjects related to computer, multimedia, and Internet technologies as a group with their supervisor. The course includes seminar, industry internship, project study, and research paper writing. In order to efficiently complete this course, students are advised to determine their own research topics by preparing their study plans and contacting their supervisor in the beginning of the semester.</p>
                        <h4>Graduation Project</h4>
                        <p>This course offers students an opportunity to study new and various subjects related to computer, multimedia, and Internet technologies with their supervisor. The course includes seminar, industry internship, project study, and research paper writing. The course is provided for the students who have already completed the Special Topics in Capstone Design. The students are advised to continue their researches and studies based on the mid-result of the Special Topics in Capstone Design, present their final research results, and submit the corresponding reports.</p>
                    </ul>
                </div>
                <div className="section">
                    <h3 className="intro">Recent Publications</h3>
                    <ul>
                        <li>Md Golam Morshed, Tangina Sultana, Young-Koo Lee. "LeL-GNN: Learnable Edge Sampling and Line Based Graph Neural Network for Link Prediction" IEEE Access 11: 56083-56097 (2023)</li>
                        <br/>
                        <li>Duong Thi Thu Van, Young-Koo Lee. "A similar structural and semantic integrated method for RDF entity embedding" Appl. Intell. 53(16): 19302-19316 (2023)</li>
                        <br/>
                        <li>Tangina Sultana, Md. Delowar Hossain, Muhammad Umair, Muhammad Numan Khan, Aftab Alam, Young-Koo Lee. "Graph pattern detection and structural redundancy reduction to compress named graphs" Inf. Sci. 647: 119428 (2023)</li>
                        <br/>
                        <li>Md Golam Morshed, Tangina Sultana, Aftab Alam, Young-Koo Lee. "Human Action Recognition: A Taxonomy-Based Survey, Updates, and Opportunities" Sensors 23(4): 2182 (2023)</li>
                        <br/>
                        <li>Md Golam Morshed, Young-Koo Lee. "LFP: Layer Wise Feature Perturbation based Graph Neural Network for Link Prediction" BigComp 2023: 85-91</li>
                        <br/>
                        <li>Irfan Ullah, Sharifullah Khan, Muhammad Imran, Young-Koo Lee. "RweetMiner: Automatic identification and categorization of help requests on twitter during disasters" RweetMiner: Automatic identification and categorization of help requests on twitter during disasters. CoRR abs/2303.02399 (2023)</li>
                        <br/>
                        <li>Duong Thi Thu Van, Muhammad Numan Khan, Tariq Habib Afridi, Irfan Ullah, Aftab Alam, Young-Koo Lee. "GDLL: A Scalable and Share Nothing Architecture Based Distributed Graph Neural Networks Framework" IEEE Access 10: 21684-21700 (2022)</li>
                        <br/>
                        <li>Moon-Sook Yeon, Young-Koo Lee, Dinh-Lam Pham, Kwanghoon Pio Kim. "Experimental Verification on Human-Centric Network-Based Resource Allocation Approaches for Process-Aware Information Systems" IEEE Access 10: 23342-23354 (2022)</li>
                        <br/>
                        <li>Tangina Sultana, Young-Koo Lee. "gRDF: An Efficient Compressor with Reduced Structural Regularities That Utilizes gRePair" Sensors 22(7): 2545 (2022)</li>
                        <br/>
                        <li>Muhammad Umair, Young-Koo Lee. "iRun: Horizontal and Vertical Shape of a Region-Based Graph Compression" Sensors 22(24): 9894 (2022)</li>
                        <br/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutProfessor;
