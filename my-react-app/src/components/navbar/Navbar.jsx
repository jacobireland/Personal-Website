import React from 'react';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import resume from '../../assets/Jacob_Ireland_Resume.pdf';
import { FaGithub, FaLinkedin, FaInstagram, FaStrava } from 'react-icons/fa';


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

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#skills">Skills</a></p>
  <p><a href="#projects">Projects</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="mysite_navbar" id="navbar">
      <div className="mysite_navbar-links">
        <div className="mysite_navbar-links_container">
          <p className='nav-item'><a href="#home">HOME</a></p>
          <p className='nav-item'><a href="#about">ABOUT</a></p>
          <p className='nav-item'><a href="#skills">SKILLS</a></p>
          <p className='nav-item'><a href="#projects">PROJECTS</a></p>
          <p className='nav-item'><a href={resume} target="_blank" rel="noreferrer" >RESUME</a></p>
        </div>

        <div className="socials">
          <a className="nav-linkedin" href="https://www.linkedin.com/in/jacob-ireland-a8a683189/" target="_blank" rel="noreferrer"><FaLinkedin size={25}></FaLinkedin></a>
          <a className="nav-twitter" href="https://github.com/jacobireland" target="_blank" rel="noreferrer"><FaGithub size={25}></FaGithub></a>
          <a className="nav-instagram" href="https://www.instagram.com/_jacob_ireland/?hl=en" target="_blank" rel="noreferrer"><FaInstagram size={25}></FaInstagram></a>
          <a className="nav-strava" href="https://www.strava.com/athletes/46252676" target="_blank" rel="noreferrer"><FaStrava size={25}></FaStrava></a>
        </div>

      </div>
      <div className="mysite_navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="00000" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="00000" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="mysite_navbar-menu_container scale-up-center">
            <div className="mysite_navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


export default Navbar