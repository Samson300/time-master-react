import React from "react"

export default function StopCountDownButton (props) {
    return (
        <button onClick={() => {
            {props.stopCountDownTimer()}
        }}>Stop</button>
    )
}