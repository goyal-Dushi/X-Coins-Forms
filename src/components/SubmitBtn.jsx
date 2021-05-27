import React from 'react';
import "./submitBtn.scss";

function SubmitBtn(props)
{
    return(
        <button className="green-btn" type={props.typeFor}>
            {props.name}
        </button>
    );
}

export default SubmitBtn;