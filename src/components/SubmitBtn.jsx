import React from 'react';
import "./submitBtn.scss";

function SubmitBtn(props)
{
    return(
        <button type="button">
            {props.name}
        </button>
    );
}

export default SubmitBtn;