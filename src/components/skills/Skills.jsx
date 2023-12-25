import React from 'react'
import './skills.css';
import { FaJava, FaPython, FaReact} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FiSettings } from 'react-icons/fi';
import clogo from '../../assets/clogofinal.jpg';

const Skills = () => {
  return (
    <div>
      <div className="mysite_skills" id="skills">
        <h1 className="skills"> Skills</h1>
        <div className="skills_row1">
          <div className="python">
            <FaPython className="py_logo" size={130} color="#f8825b"></FaPython>
            <h1 className="py_name"> Python</h1>
            <h1 className="py_blurb"> Over the past four years I’ve coded extensively in Python for both academic and personal projects. I consider myself very familiar with the language.</h1>
          </div>
          <div className="clang">
            <img className="c_logo" src={clogo} width="130" alt="c logo"/>
            <h1 className="c_name"> C/C++</h1>
            <h1 className="c_blurb"> The majority of my academic projects in the past two years have been done in C & C++. I'm very familiar with Linux OS, File System Drivers and Schedulers, Compilers, HTTP/TCP Protocols, and more.</h1>
          </div>
          <div className="java">
            <FaJava className="java_logo" size={130} color="#f8825b"></FaJava>
            <h1 className="java_name"> Java</h1>
            <h1 className="java_blurb"> Java was the first langugae I learned, and since then I have continued to utilize it in and out of the classroom, as well as TA for a 3000 level Data Structures in Java class. I consider myself very familar with the language.</h1>
          </div>
        </div>
        <div className="skills_row2">
		  <div className="react">
            <FaReact className="react_logo" size={130} color="#f8825b"></FaReact>
            <h1 className="react_name"> React JS/Native</h1>
            <h1 className="react_blurb"> I have an in depth understanding of React JS and Native and have used them both extensively for implementing web and mobile applications.</h1>
          </div>
          <div className="javascript">
            <DiJavascript1 className="js_logo" size={130} color="#f8825b"></DiJavascript1>
            <h1 className="js_name"> Javascript, HTML, CSS</h1>
            <h1 className="js_blurb"> I used all three of these extensively while coding and implementing this website as well as other projects. I consider myself quite adept at utilizing and implementing these languages.</h1>
          </div>
          <div className="malware">
            <FiSettings className="malware_logo" size={130} color="#f8825b"></FiSettings>
            <h1 className="malware_name"> Malware Analysis Reverse Engineering</h1>
            <h1 className="malware_blurb"> Extensive experience dissecting and studying malicious files using malware analysis tools such as IDA PRO, OllyDbg, FakeNet, Floss, and more.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills