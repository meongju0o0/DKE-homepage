import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import LOGO from '../assets/images/logo/DKE-logo-removebg.png';


const Navbar = () => {
    return (
        <nav> {
            <div className="navbar">
                <div className = "wrapper">
                    <button style={ {marginLeft: '10px', marginTop: '5px', padding: '0px', border: '0px', backgroundColor: '#333'}}>
                        <Link to= "/" style={ {padding: '0px', backgroundColor: '#333'}}>
                            <img style={ {width: '80px', backgroundColor: '#333', padding: '0px', margin: '0px'} } src={ LOGO } alt="DistLearning" />
                        </Link>
                    </button>
                    <div className="dropdown">
                        <button className="dropbtn">Admissions 
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/pages/members/admissions">Link 1</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Members
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/pages/members/members">Link 1</Link>
                        </div>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn">Publications
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="https://dblp.org/pid/53/1318.html" target="_blank">DBLP</a>
                        </div>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn">Research
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/pages/research/research">Link 1</Link>
                        </div>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn">About DKE Lab.
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/pages/about/about-professor">About Professor</Link>
                            <Link to="/pages/about/missions">Missions</Link>
                        </div>
                    </div>
                </div>
            </div>
        }
        </nav>
    );
};

export default Navbar;
