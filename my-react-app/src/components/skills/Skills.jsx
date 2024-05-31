import React from 'react'
import './skills.css';
import { FaJava, FaPython, FaReact, FaDatabase} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FiSettings } from 'react-icons/fi';
import clogo from '../../assets/clogofinal.jpg';

const Skills = () => {
    return (
        <div>
            <div className="mysite_skills" id="skills">
                <h1 className="mysite_skills-title"> Skills</h1>
                <div className="mysite_skills-container">
                    <div className="mysite_skills-skill">
                        <FaPython className="mysite_skills-logo" color="#f8825b"></FaPython>
                        <h1 className="mysite_skills-name"> Python</h1>
                        <h1 className="mysite_skills-blurb"> Over the past four years I’ve coded extensively in Python for both academic and personal 
                        projects. I consider myself very familiar with the language.</h1>
                    </div>
                    <div className="mysite_skills-skill">
                        <img className="mysite_skills-logo" src={clogo} width="130" alt="c logo"/>
                        <h1 className="mysite_skills-name"> C/C++</h1>
                        <h1 className="mysite_skills-blurb"> The majority of my academic projects in the past two years have been done in C & C++. I'm 
                        very familiar with Linux OS, File System Drivers and Schedulers, Compilers, HTTP/TCP Protocols, and more.</h1>
                    </div>
                    <div className="mysite_skills-skill">
                        <FaJava className="mysite_skills-logo" size={130} color="#f8825b"></FaJava>
                        <h1 className="mysite_skills-name"> Java</h1>
                        <h1 className="mysite_skills-blurb"> Java was the first langugae I learned, and since then I have continued to utilize it in 
                        and out of the classroom, as well as TA for a 3000 level Data Structures in Java class. I consider myself very familar 
                        with the language.</h1>
                    </div>
                    <div className="mysite_skills-skill">
                        <FaReact className="mysite_skills-logo" size={130} color="#f8825b"></FaReact>
                        <h1 className="mysite_skills-name"> React JS/Native</h1>
                        <h1 className="mysite_skills-blurb"> I have an in depth understanding of React JS and Native and have used them both extensively for implementing web and mobile applications.</h1>
                    </div>
                    <div className="mysite_skills-skill">
                        <DiJavascript1 className="mysite_skills-logo" size={130} color="#f8825b"></DiJavascript1>
                        <h1 className="mysite_skills-name"> Javascript, HTML, CSS</h1>
                        <h1 className="mysite_skills-blurb"> I used all three of these extensively while coding and implementing this website as well as other projects. I consider myself quite adept at utilizing and implementing these languages.</h1>
                    </div>
                    <div className="mysite_skills-skill">
                        <FiSettings className="mysite_skills-logo" size={130} color="#f8825b"></FiSettings>
                        <h1 className="mysite_skills-name"> Malware Analysis Reverse Engineering</h1>
                        <h1 className="mysite_skills-blurb"> Experience dissecting and studying malicious files using malware analysis tools such as IDA PRO, OllyDbg, FakeNet, Floss, and more.</h1>
                    </div>
                    <div className="mysite_skills-skill">
                        <FaDatabase className="mysite_skills-logo" size={130} color="#f8825b"></FaDatabase>
                        <h1 className="mysite_skills-name"> SQL</h1>
                        <h1 className="mysite_skills-blurb">Academic and professional experience creating DBMS's and related API's, including projects utilizing Mongo DB and MySQL.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills