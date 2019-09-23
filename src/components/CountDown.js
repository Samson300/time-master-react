import React from "react"

export default function CountDown(props) {
    return (
        <div>
            <h1>CountDown</h1>
            <p>{props.countdown}</p>
            <form>
            <div class="form-group">
                <p></p>
                <input
                    value={props.total}
                    onChange={(e) => {
                        props.setCountDownTime(e.target.value);
                    }}
                    type="number"
                    className="form-control"
                    id="totalTime"
                    placeholder="Input Time"
                ></input>
            </div>
        </form>
        </div>
    )
}