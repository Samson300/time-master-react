import React from "react"

export default function StartCountDownButton(props) {
    return (
        <button onClick={() => {
            props.startCountDownTimer()
        }}>Start</button>
    )
}