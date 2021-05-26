import React from "react";
import Label from "../components/Label";
import SubmitBtn from "../components/SubmitBtn";
import "../sass/forms.scss";
import BlueBtn from "../components/BlueBtn";
import "./form3.scss";
import "./form2.scss";

function Form3()
{
    return(
        <>
            {/* <div className="info-container">
                <p>
                    Please enter seven digit code we just sent to your
                    number <span>+202-502-5899</span> 
                    <a href="#" className="links"> Change </a>
                </p>
            </div> */}

            <form action="#">
                <div className="input-wrapper">
                    <div className="input-container">
                        <Label labelFor="country-code" title="Country code *" />
                        <select style={{width:170}} name="country-code" id="country-code" >
                            <option value="IN">IN</option>
                            <option value="US">US</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <Label labelFor="phoneNo" title="Phone number *" />
                        <input 
                        style={{width:199}}
                        type="tel" 
                        name="phoneNo" 
                        id="phoneNo" />
                    </div>
                    <div style={{marginLeft:19,marginTop:45}}>
                    <BlueBtn btnWidth={146} type="submit" title="SEND CODE" />
                    </div>
                </div>
            </form>

            <form action="#">
            <Label labelFor="sms-code" title="SMS Code*" />
            <input 
            type="number" 
            name="sms-code" 
            id="sms-code" />
            <div style={{marginTop:18, textAlign:"center",width:553}} className="conditional-box">
                <p>You have 3 attempts left.Didn't receive the SMS.
                     <a href="#" className="links"> Resend SMS Code </a>
                </p>
            </div>
            <div style={{marginTop:34}}>
            <SubmitBtn typeFor="submit" name="VERIFY PHONE NUMBER" />
            </div>  
            </form>
        </>
    );
}

export default Form3;