import React from 'react';
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
                            <a href="/pages/admissions/#">Link 1</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Members
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/pages/members/#">Link 1</a>
                        </div>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn">Publications
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/pages/publications/#">Link 1</a>
                        </div>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn">Research
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/pages/research/#">Link 1</a>
                        </div>
                    </div> 
                    <div className="dropdown">
                        <button className="dropbtn">About DKE Lab.
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/pages/about/#">Link 1</a>
                        </div>
                    </div>
                </div>
            </div>
            }
        </nav>
    );
};

export default Navbar;
