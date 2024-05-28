import './proj3popup.css';
import React from "react";
import { FaTimes, FaGithub } from 'react-icons/fa';

const Proj3Popup = ({ visible, setVisible}) => {

    return (
        <div className="popup_container">
            <div className='header'>
                <FaTimes size={50} className="close" onClick={() => { setVisible(!visible); }}></FaTimes>
            </div>
            <div className='proj_info'>
                <h className='title'>Portfolio Website</h>
                <div className='lang_info'>
                    <h className='info'>This page is currently being updated, but you can view the project on Github!</h>
                </div>
                <a className="git3" href="https://github.com/jacobireland/Personal-Website" target="_blank" rel="noreferrer">
                <div className='gitlogo3'><FaGithub size={21} ></FaGithub></div>
                        <h className="github3">Github</h>
                    </a>
            </div>
        </div>
    )
}

export default Proj3Popup