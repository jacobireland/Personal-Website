import './proj2popup.css';
import React from "react";
import { FaTimes, FaGithub } from 'react-icons/fa';

const Proj2Popup = ({ visible, setVisible}) => {

    return (
        <div className="popup_container">
            <div className='header'>
                <FaTimes size={50} className="close" onClick={() => { setVisible(!visible); }}></FaTimes>
            </div>
            <div className='proj_info'>
                <h className='title'>MoodMates - IOS Mobile App</h>
                <div className='lang_info'>
                    <h className='info'>This page is currently being updated, but you can view the project on Github!</h>
                </div>
                <a className="git2" href="https://github.com/jacobireland/MoodMates" target="_blank" rel="noreferrer">
                        <div className='gitlogo2'><FaGithub size={21} ></FaGithub></div>
                        <h className="github2">Github</h>
                    </a>
            </div>
        </div>
    )
}

export default Proj2Popup