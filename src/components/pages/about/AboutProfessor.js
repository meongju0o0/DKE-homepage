import React from 'react';

import { Education } from './Education';
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
                        <hr style={ {marginTop: '0px', border: 'solid 1px #999'} }/>
                        <Education department = { "Computer Science" } school = { "Korea Advanced Institute of Science and Technology" } degree = { "Master Degree" } country = { "Daejeon, Republic of Korea" } date = { "Mar. 1992 - Feb. 1994" } />
                        <hr style={ {marginTop: '0px', border: 'solid 1px #999'} }/>
                        <Education department = { "Computer Science" } school = { "Korea Advanced Institute of Science and Technology" } degree = { "Bachelor Degree" } country = { "Daejeon, Republic of Korea" } date = { "Mar. 1988 - Feb. 1992" } />
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
                        <li>paper1</li>
                        <li>paper2</li>
                        <li>paper3</li>
                        <li>paper4</li>
                        <li>paper5</li>
                        <li>paper6</li>
                        <li>paper7</li>
                        <li>paper8</li>
                        <li>paper9</li>
                        <li>paper10</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutProfessor;
