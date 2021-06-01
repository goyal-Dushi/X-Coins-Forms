import React, { useState } from "react";
import Label from "../components/Label";
import SubmitBtn from "../components/SubmitBtn";
import "../sass/forms.scss";
import "./form3.scss";
import { ErrorMessage, Field, Formik } from "formik";
import UpdatePhone from "./UpdatePhone";
import * as Yup from "yup";
import { useHistory } from "react-router";

function Form3()
{

    const [changeNumber, setChange] = useState(false);
    const [smsClass, setsmsClass] = useState("correct-input");
    const history = useHistory();

    return(
        <>

            {changeNumber ? 
                <UpdatePhone function={setChange} /> :
                <div className="info-container">
                <div>
                    Please enter seven digit code we just sent to your
                    number
                    <div style={{display:"flex"}}>
                    <span>+202-502-5899</span> 
                    <div onClick={() => setChange(true)} className="links"> Change </div>
                    </div> 
                </div>
            </div>
            }
            <Formik

                initialValues = {{
                    smsNumber : ''
                }}
                validationSchema = {Yup.object({
                    smsNumber : Yup.number()
                    .required("Required SMS Code")
                    .positive("Code Invalid")
                    .min(100000, "Code must be of 6 digits")
                    .max(999999,"Code must be of 6 digits")
                })}
                onSubmit = {(values)=> {
                    console.log("SMS CODE IS : "+values.smsNumber);
                    history.push("/verifyID");
                }}
            >
            
            {formik => (
                <form onSubmit={formik.handleSubmit}>

                <div className="input-container">
                <Label labelFor="smsNumber" title="SMS Code*" />
                <Field name="smsNumber" plaholder="Enter SMS code" type="number" className={smsClass} />
                {formik.errors.smsNumber && formik.touched.smsNumber ? setsmsClass("error-input") : setsmsClass("correct-input")}
                <ErrorMessage name="smsNumber" component="div" className="error-msg" />
                </div>
                {/* , textAlign:"center",width:553 */}
                <div style={{marginTop:18}} className="conditional-box">
                    <p>You have 3 attempts left.Didn't receive the SMS.
                         <a href="www.google.com" className="links"> Resend SMS Code </a>
                    </p>
                </div>
                <div style={{marginTop:34}}>
                <SubmitBtn typeFor="submit" name="VERIFY PHONE NUMBER" />
                </div>  
                </form>
            )}
            </Formik>
        </>
    );
}

export default Form3;