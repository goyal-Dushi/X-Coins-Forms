import React from 'react';
import "./navCircle.scss";

function NavCircle(props)
{
    return(
        <div className="circle">
            {props.content}
        </div>
    )
}

export default NavCircle;