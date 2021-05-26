import React from "react";
import "./formHead.scss";

function FromHeading(props)
{
    return(
        <h1 className="form-head" >
            {props.title}
        </h1>
    );
}

export default FromHeading;