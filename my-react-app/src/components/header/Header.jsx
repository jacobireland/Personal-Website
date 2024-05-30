import React from 'react'
import './header.css';
import { FaGithub, FaLinkedin, FaInstagram, FaStrava } from 'react-icons/fa';

const Header = () => {

  return (
    <div className="mysite_header" id="home">
        <div className="mysite_header-content">
            <div className="mysite_header-intro">
                <div className='mysite_header-name'>
                    <h1 className="mysite_header-firstName">Jacob</h1>
                    <h1 className="mysite_header-lastName">Ireland</h1>
                </div>
                <h1 className='mysite_header-bio'>Columbia Graduate, Student-Athlete, & Programmer</h1>
                <div className='mysite_header-links'>
                    <a className="mysite_header-social" href="https://www.linkedin.com/in/jacob-ireland-a8a683189/" target="_blank" rel="noreferrer"><FaLinkedin size={30}></FaLinkedin></a>
                    <a className="mysite_header-social" href="https://github.com/jacobireland" target="_blank" rel="noreferrer"><FaGithub size={30}></FaGithub></a>
                    <a className="mysite_header-social" href="https://www.instagram.com/_jacob_ireland/?hl=en" target="_blank" rel="noreferrer"><FaInstagram size={30}></FaInstagram></a>
                    <a className="mysite_header-social" href="https://www.strava.com/athletes/46252676" target="_blank" rel="noreferrer"><FaStrava size={30}></FaStrava></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header