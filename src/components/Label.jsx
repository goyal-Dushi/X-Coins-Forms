import React from 'react';
import "./label.scss";

function Label(props)
{
    return(
        <label htmlFor={props.title}>{props.title}</label>
    )
}

export default Label;