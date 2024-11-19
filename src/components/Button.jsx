import React from "react";
function Button(props) {
    return (
        <button onClick={props.handleClick} className="px-2 py-1 border rounded-lg border-cyan-800" type="button">
            {props.text}
        </button>
    );
}
export default Button;
