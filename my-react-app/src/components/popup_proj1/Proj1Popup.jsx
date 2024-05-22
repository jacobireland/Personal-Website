import './proj1popup.css';
import React from "react";
import { FaTimes } from 'react-icons/fa';

const Proj1Popup = ({ visible, setVisible}) => {

    return (
        <div className="popup_container">
            <div className="close" onClick={() => { setVisible(!visible); }}><FaTimes size={25}></FaTimes></div>
        </div>
    )
}

export default Proj1Popup