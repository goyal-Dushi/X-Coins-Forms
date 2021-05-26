import React from "react";
import Warning from "../components/Warning";
import ClockImg from "../images/icons/clock-icon.svg";
import Label from "../components/Label";
import "./formUPD.scss";
import SubmitBtn from "../components/SubmitBtn";

function Form1_UPD()
{
    return(
        <>
            <Warning 
            imgSrc={ClockImg}
            content="We've sent your email address a code. Please
                    input the 4 digit code here to verify your email
                    address" 
            />
            
            <form action="#">

            <div className="label-container">
            <Label labelFor="pincode" title="4 digit code" />
            </div>

            <div className="pin-container">
                <input 
                type="number" 
                name="pincode" 
                id="pincode" 
                />
                <input 
                type="number" 
                name="pincode" 
                id="pincode" 
                />
                <input 
                type="number" 
                name="pincode" 
                id="pincode" 
                />
                <input 
                type="number" 
                name="pincode" 
                id="pincode" 
                />
            </div>
            <div className="form1UPD-submit-btn">
            <SubmitBtn typeFor="submit" name="RESEND CODE" />
            </div>
            </form>
        </>
    );
}

export default Form1_UPD;