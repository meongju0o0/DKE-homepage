import React from 'react';
import { Link } from 'react-router-dom';

import { NewTabLink } from './NewTabLink';
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
                        <button className="dropbtn">Members
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/pages/members/doctoral">Doctoral</Link>
                            <Link to="/pages/members/master">Master</Link>
                            <Link to="/pages/members/bachelor">Bachelor</Link>
                            <Link to="/pages/members/alumni">Alumni</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Publications
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <NewTabLink to="https://dblp.org/pid/53/1318.html">DBLP</NewTabLink>
                            <NewTabLink to="https://scholar.google.co.kr/citations?user=Xk6Ige8AAAAJ&hl=en">Google Scholar</NewTabLink>
                            <NewTabLink to="https://www.dbpia.co.kr/author/authorDetail?ancId=231140">DBpia</NewTabLink>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Research
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/pages/research/past-research">Past Studies</Link>
                            <Link to="/pages/research/ongoing-research">Ongoing Studies</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">About DKE Lab.
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/pages/about/about-professor">About Professor</Link>
                            <Link to="/pages/about/missions">Missions</Link>
                            <Link to="/pages/about/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        }
        </nav>
    );
};

export default Navbar;
