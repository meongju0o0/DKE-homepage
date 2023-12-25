import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav> {
            <div class="navbar">
                <div class = "wrapper">
                    <div class="dropdown">
                        <button class="dropbtn">Admissions 
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="./pages/admissions/#">Link 1</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Members
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="./pages/members/#">Link 1</a>
                        </div>
                    </div> 
                    <div class="dropdown">
                        <button class="dropbtn">Publications
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="./pages/publications/#">Link 1</a>
                        </div>
                    </div> 
                    <div class="dropdown">
                        <button class="dropbtn">Research
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="./pages/research/#">Link 1</a>
                        </div>
                    </div> 
                    <div class="dropdown">
                        <button class="dropbtn">About DKE Lab.
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="./pages/about/#">Link 1</a>
                        </div>
                    </div>
                </div>
            </div>
            }
        </nav>
    );
};

export default Navbar;
