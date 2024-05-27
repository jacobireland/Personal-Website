import './proj1popup.css';
import React from "react";
import { FaTimes } from 'react-icons/fa';

const Proj1Popup = ({ visible, setVisible}) => {

    return (
        <div className="popup_container">
            <FaTimes size={20} className="close" onClick={() => { setVisible(!visible); }}></FaTimes>
        </div>
    )
}

export default Proj1Popup