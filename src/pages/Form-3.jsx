import React, { useState } from "react";
import Label from "../components/Label";
import SubmitBtn from "../components/SubmitBtn";
import "../sass/forms.scss";
import BlueBtn from "../components/BlueBtn";
import "./form3.scss";
import "./form2.scss";
import { useFormik } from "formik";
import { useHistory } from "react-router";

const validate = (values) => {
    const errors = {};
    if(!values.smsNumber){
        errors.smsNumber = "Please type in the Code send to you via SMS"
    }
    else if(values.smsNumber.length > 6){
        errors.smsNumber = "Check the code again, length cannot be greater than 6"
    }
    return errors;
}

function Form3()
{

    const [changeNumber, setChange] = useState(false);
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            smsNumber : ''
        },
        validate,
        onSubmit : (values)=> {
            console.log("SMS CODE IS : "+values.smsNumber);
            history.push("/verifyID");
        }   
    });

    return(
        <>

            {changeNumber ? (
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
            ) : (
                <div className="info-container">
                <p>
                    Please enter seven digit code we just sent to your
                    number <span>+202-502-5899</span> 
                    <a type="button" onClick={() => setChange(true)} className="links"> Change </a>
                </p>
            </div>
            )}

            <form action="#" onSubmit={formik.handleSubmit}>
            <Label labelFor="smsNumber" title="SMS Code*" />
            <input 
            type="text" 
            name="smsNumber" 
            id="sms-code" 
            value={formik.values.smsNumber}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            />
            {formik.touched.smsNumber && formik.errors.smsNumber ? (
                <div className="error-msg"> {formik.errors.smsNumber} </div>
            ): null}

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