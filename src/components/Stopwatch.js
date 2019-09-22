import React from "react";

export default function Stopwatch(props) {
    return(
        <div>
            <p>{ props.hours + " hours"}</p>
            <p>{ props.minutes + " minutes"}</p>
            <p>{ props.seconds + " seconds"}</p>
        </div>
    )
} 