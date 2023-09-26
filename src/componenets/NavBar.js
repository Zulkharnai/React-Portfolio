// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';

function NavBar() {

    let [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">John Doe</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skill</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">John Doe</div>
                <div className="hamburger-menu">
                    <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#Skills">Skill</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
