import React from "react"

export default function CountDown(props) {
    return (
        <div>
            <h1>CountDown</h1>
            <form>
            <div>
            <p>{props.countdown}</p>
                <input
                    onChange={(e) => {
                        props.setCountDownTimer(e.target.value);
                    }}
                    type="number"
                    id="totalTime"
                    placeholder="Input Time"
                ></input>
            </div>
        </form>
        </div>
    )
}