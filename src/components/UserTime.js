import React from "react"

export default function () {
    display_ct() {
        var x = new Date()
        document.getElementById('ct').innerHTML = x;
        display_c();
    }
    return (
        <p></p>
    )
}