import React from "react";
import './Popup.css';

export default function Popup(props) {

    return (
        <div className={`popup-window ${props.isOpen ? 'popup-window_opened' : ''}`}>
            <div className="wrapper">
                <div className="popup">
                    <p className={`popup__title ${props.type === 'error' && 'popup__title_error'}`}>
                        {props.title}
                    </p>
                    <button
                        className='btn popup__close-btn'
                        type='button' onClick={props.onClose}>
                    </button>
                </div>
            </div>
        </div>
    );
}