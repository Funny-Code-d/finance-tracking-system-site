import React from "react";

const Button = function(props) {
    return (
        <button className={props.button.classButton}>{props.button.text}</button>
    )
}

export default Button