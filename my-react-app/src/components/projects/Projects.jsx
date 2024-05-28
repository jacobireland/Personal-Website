import './projects.css';
import { FaGithub, FaEye } from 'react-icons/fa';

import code from '../../assets/code2..png';
import phone from '../../assets/phone.png';
import website from '../../assets/website.png';
import hack from '../../assets/hack.png';

const Projects = ({ proj1Visible, setProj1Visible, proj2Visible, setProj2Visible, proj3Visible, setProj3Visible, proj4Visible, setProj4Visible }) => {
  return (
    <div>
      <div className="mysite_projects" id="projects">
        <h1 className="projects"> Projects</h1>
        <div className="projects_row">
          <span className="proj">
            <div className='proj_img'>
              <img className="img" src={hack} width="360px" alt="computer screen with code on it"></img>
              <h className="imgtext">Crypto Currency Application</h>
            </div>
            <div className="proj_button" onClick={() => { setProj1Visible(!proj1Visible)}}>
              <FaEye size={21} id='eye'></FaEye>
              <h>Project</h>
            </div>
            <a className="git_button" href="https://github.com/jacobireland/Crypto-Application" target="_blank" rel="noreferrer">
              <FaGithub size={21} id='git'></FaGithub>
              <h>Github</h>
            </a>
          </span>
          <span className="proj">
            <div className='proj_img'>
              <img className="img" src={phone} width="360px" alt="computer screen with code on it"></img>
              <h className="imgtext">IOS Social Media App</h>
            </div>
            <div className="proj_button" onClick={() => { setProj2Visible(!proj2Visible)}}>
              <FaEye size={21} id='eye'></FaEye>
              <h>Project</h>
            </div>
            <a className="git_button" href="https://github.com/jacobireland/MoodMates" target="_blank" rel="noreferrer">
              <FaGithub size={21} id='git'></FaGithub>
              <h>Github</h>
            </a>
          </span>
          <span className="proj">
            <div className='proj_img'>
              <img className="img" src={website} width="360px" alt="computer screen with code on it"></img>
              <h className="imgtext">Portfolio Website</h>
            </div>
            <div className="proj_button" onClick={() => { setProj3Visible(!proj3Visible)}}>
              <FaEye size={21} id='eye'></FaEye>
              <h>Project</h>
            </div>
            <a className="git_button" href="https://github.com/jacobireland/Personal-Website" target="_blank" rel="noreferrer">
              <FaGithub size={21} id='git'></FaGithub>
              <h>Github</h>
            </a>
          </span>
          <span className="proj">
            <div className='proj_img'>
              <img className="img" src={code} width="360px" alt="computer screen with code on it"></img>
              <h className="imgtext">Code Optimization Program</h>
            </div>
            <div className="proj_button" onClick={() => { setProj4Visible(!proj4Visible)}}>
              <FaEye size={21} id='eye'></FaEye>
              <h>Project</h>
            </div>
            <a className="git_button" href="https://github.com/COMS4115-PLT-Fall2023/programming-assignment-4-jacobireland" target="_blank" rel="noreferrer">
              <FaGithub size={21} id='git'></FaGithub>
              <h>Github</h>
            </a>
          </span>
        </div>
        <div className="projects_row">
          
        </div>
      </div>
    </div>
  )
}

export default Projects