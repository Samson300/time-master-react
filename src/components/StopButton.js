import React from 'react';

export default function StopButton(props) {
    return(
        <button className="stopButton" onClick={() => {
            props.stopTimer();
        }}>Stop</button>
    )
}