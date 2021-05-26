import React from "react";
import "./blueBtn.scss"

function  BlueBtn(props)
{
    return(
        <button type={props.type} style={{width:props.btnWidth}} >
            {props.title}
        </button>
    );
}

export default BlueBtn;