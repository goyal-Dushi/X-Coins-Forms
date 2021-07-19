import React, { memo } from "react";
import "./navCircle.scss";
import Label from "./Label";

function NavCircle(props) {
  return (
    <div className='circle-wrapper'>
      <div className={props.status ? "circle activeCircle" : "circle"}>
        {props.content}
      </div>
      <Label
        labelFor={props.content}
        title={props.labelHead}
        style={{ fontWeight: "bold" }}
      />
    </div>
  );
}

export default memo(NavCircle);
