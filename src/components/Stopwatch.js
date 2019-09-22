import React from "react";

export default function Stopwatch(props) {
    return(
        <div>
            <p>{ props.seconds }</p>
            <p>{ props.minutes }</p>
            <p>{ props.hours }</p>
        </div>
    )
} 