import React from "react";

export default function Stopwatch(props) {
    return(
        <div>
            {
                <p>{ props.seconds }</p>
            }
        </div>
    )
} 