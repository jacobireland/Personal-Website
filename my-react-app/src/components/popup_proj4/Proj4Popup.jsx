import './proj4popup.css';
import React from "react";
import { FaTimes, FaGithub } from 'react-icons/fa';

const Proj4Popup = ({ visible, setVisible}) => {

    return (
        <div className="popup_container">
            <div className='header'>
                <FaTimes size={50} className="close" onClick={() => { setVisible(!visible); }}></FaTimes>
            </div>
            <div className='proj_info'>
                <h className='title'>Code Optimization Program</h>
                <div className='lang_info'>
                    <h className='info'>This page is currently being updated, but you can view the project on Github!</h>
                </div>
                <a className="git4" href="https://github.com/COMS4115-PLT-Fall2023/programming-assignment-4-jacobireland" target="_blank" rel="noreferrer">
                <div className='gitlogo4'><FaGithub size={21} ></FaGithub></div>
                        <h className="github4">Github</h>
                    </a>
            </div>
        </div>
    )
}

export default Proj4Popup