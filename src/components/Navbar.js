import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav> {
            <div className="navbar">
                <div className = "wrapper">
                    <div className="dropdown">
                        <button className="dropbtn">Admissions 
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/pages/admissions/admissions">Link 1</Link>
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
                            <Link to="/pages/publications/publications">Link 1</Link>
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
