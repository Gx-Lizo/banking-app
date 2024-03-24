import React from 'react';

// Buttons component is used to add buttons 
export default function Buttons(props) {

    return (
        <div className="button-container">
            <button className="action-button" onClick={props.Transaction}>{props.btnName}</button>
        </div>
    );
}