import React from 'react'
import './about.css';
import mntflic from '../../assets/memnt.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaStrava } from 'react-icons/fa';


const About = () => {
  return (
    <div className="mysite_about-page" id="about">
      <div className="mysite_about">
        <img className="mysite_flic" src={mntflic} width="300" alt="running in mountains" />
        <div className="mysite_about-info">
          <h1 className="name"> Jacob Ireland</h1>
          <h1 className="details"> CU '24, Computer Science, XCTF</h1>
          <h1 className="introduction"> Hello! I’m Jacob Ireland, a Computer Science major and Track and Field athlete at Columbia University.</h1>
          <h1 className="introduction2"> As a senior set to graduate this spring with a bachelor’s degree in CS, I’m excited to channel my passion for coding into the tech world. My time at Columbia has provided me with a well-rounded foundation in various CS fields, as well as a love for New York City. I'm enthusiastic about working in an environment that values adaptability, diverse collaboration, and a shared goal to build something meaningful. Eager to contribute my skills and versatility to innovative projects, I'm actively seeking opportunities in NYC's tech scene, particularly within startups and smaller companies.</h1>
          <h1 className="interests"> Please explore my portfolio and reach out to me if you’re looking for someone with a skillset like mine.</h1>
        </div>
      </div>
      <div className="mysite_about-socials">
        <a className="linkedin" href="https://www.linkedin.com/in/jacob-ireland-a8a683189/" target="_blank" rel="noreferrer"><FaLinkedin size={40}></FaLinkedin></a>
        <a className="twitter" href="https://github.com/jacobireland" target="_blank" rel="noreferrer"><FaGithub size={40}></FaGithub></a>
        <a className="instagram" href="https://www.instagram.com/_jacob_ireland/?hl=en" target="_blank" rel="noreferrer"><FaInstagram size={40}></FaInstagram></a>
        <a className="strava" href="https://www.strava.com/athletes/46252676" target="_blank" rel="noreferrer"><FaStrava size={40}></FaStrava></a>
      </div>
    </div>
  )
}

export default About