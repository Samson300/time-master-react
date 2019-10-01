import React from "react"

// component that returns a button to start count down
export default function StartCountDownButton(props) {
    return (
        <button onClick={() => {
            props.startCountDownTimer()
        }}>Start</button>
    )
}