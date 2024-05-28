import './projects.css';
import { FaGithub, FaEye } from 'react-icons/fa';

import code from '../../assets/code2..png';

const Projects = ({ proj1Visible, setProj1Visible}) => {
  return (
    <div>
      <div className="mysite_projects" id="projects">
        <h1 className="projects"> Projects</h1>
        <div className="projects_row">
          <span className="proj">
            <div className='proj_img'>
              <img className="img" src={code} width="350px" alt="computer screen with code on it"></img>
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
              <img className="img" src={code} width="350px" alt="computer screen with code on it"></img>
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
              <img className="img" src={code} width="350px" alt="computer screen with code on it"></img>
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
              <img className="img" src={code} width="350px" alt="computer screen with code on it"></img>
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
        </div>
        <div className="projects_row">
          
        </div>
      </div>
    </div>
  )
}

export default Projects