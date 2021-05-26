import React from "react";
import "./warning.scss";

function Warning(props)
{
    return (
        <div className="warning-rect">
            <img className="warning-icon" src={props.imgSrc} alt={props.imgSrc} />
            {props.content}
        </div>
    );
}

export default Warning;