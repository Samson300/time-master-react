import React from "react";

export default function StartButton(props) {
    return (
        <button className="startButton" onClick={() => {
            props.startTimer();
        }} >Start</button>
    )
}