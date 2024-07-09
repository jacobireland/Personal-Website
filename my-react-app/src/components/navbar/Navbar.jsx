import React from 'react';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import resume from '../../assets/Jacob_Ireland_Resume.pdf';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


document.addEventListener('DOMContentLoaded', e => {
    let navbar = document.getElementById("navbar");
    let navPos = navbar.offsetTop;

    window.addEventListener("scroll", e => {
        let scrollPos = window.scrollY;
        if (scrollPos > navPos) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
})


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const handleClick = () => {
        setToggleMenu(false);
    };

    const Menu = () => (
        <>
            <p><a href="#home" onClick={(e) => handleClick()}>Home</a></p>
            <p><a href="#about"  onClick={(e) => handleClick()}>About</a></p>
            <p><a href="#skills"  onClick={(e) => handleClick()}>Skills</a></p>
            <p><a href="#projects"  onClick={(e) => handleClick()}>Projects</a></p>
            <p><a href={resume} target="_blank" rel="noreferrer"  onClick={(e) => handleClick()}>Resume</a></p>
        </>
    )
        
    return (
        <div id="navbar">
            <div className="mysite_navbar-links">
                <div className="mysite_navbar-links_container">
                    <span className='nav-item'><a href="#home">HOME</a></span>
                    <span className='nav-item'><a href="#about">ABOUT</a></span>
                    <span className='nav-item'><a href="#skills">SKILLS</a></span>
                    <span className='nav-item'><a href="#projects">PROJECTS</a></span>
                    <span className='nav-item'><a href={resume} target="_blank" rel="noreferrer" >RESUME</a></span>
                </div>
                <div className="mysite_navbar-socials">
                    <a className="nav-linkedin" href="https://www.linkedin.com/in/jacob-ireland-a8a683189/" target="_blank" rel="noreferrer"><FaLinkedin size={25}></FaLinkedin></a>
                    <a className="nav-twitter" href="https://github.com/jacobireland" target="_blank" rel="noreferrer"><FaGithub size={25}></FaGithub></a>
                    <a className="nav-instagram" href="https://www.instagram.com/_jacob_ireland/?hl=en" target="_blank" rel="noreferrer"><FaInstagram size={25}></FaInstagram></a>
                </div>
            </div>
            <div className="mysite_navbar-menu-area">
                {toggleMenu
                    ? <RiCloseLine color="00000" onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="00000" onClick={() => setToggleMenu(true)}/>
                }
                <div className='mysite_navbar-menu-open'>
                {toggleMenu && (
                    <div className="mysite_navbar-menu_container scale-up-center">
                        <div className="mysite_navbar-menu_container-links">
                            <Menu className='mysite_navbar-menu'/>
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}

export default Navbar