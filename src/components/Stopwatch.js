import React from "react";

export default function Stopwatch(props) {
    return(
        <div>
            <p>{ props.hours }</p>
            <p>{ props.minutes }</p>
            <p>{ props.seconds }</p>
        </div>
    )
} 