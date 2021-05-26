import React from 'react';
import "./submitBtn.scss";

function SubmitBtn(props)
{
    return(
        <button type={props.typeFor}>
            {props.name}
        </button>
    );
}

export default SubmitBtn;