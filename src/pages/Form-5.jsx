import React, { useState } from "react";
import Warning from "../components/Warning";
import Label from "../components/Label";
import SubmitBtn from "../components/SubmitBtn";
import AttentionIcon from "../images/icons/attention-icon.svg";
import "../sass/forms.scss";
import "./form5.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";

function Form5()
{   
    const [dobClass, setDobClass] = useState("correct-input");
    const [methodClass, setmethodClass] = useState("correct-input");
    const [frontPhotoClass, setfrontClass] = useState("correct-input");
    const [backPhotoClass, setBackClass] = useState("correct-input");
    const [selfieClass, setselfieClass] = useState("correct-input");
    const [dlNumClass, setDLnumClass] = useState("correct-input");
    return(
        <>
            <Warning 
            height={116}
            imgSrc={AttentionIcon} 
            content="Follow instructions to start buying cryptocurrencies via Xcoins:
            1) Upload the front and back of your government issued ID
            2) Please take a selfie holding your identity document and a note
            with today’s date and «Xcoins» written on it" 
            />

            <Formik
                initialValues= {{
                    dob : '',
                    method : '',
                    frontPhoto : '',
                    backPhoto : '',
                    selfiePhoto : '',
                    DLnumber : '',
                    terms : false
                }}

                validationSchema = {Yup.object({
                dob : Yup.date()
                .required("Required DOB")
                .max(new Date(), "DOB cannot be in future")
                .typeError("Birth Date has to be a valid date"),
                method : Yup.string()
                .required("Method Required"),
                DLnumber : Yup.number()
                .required("DL number is required"),
                terms : Yup.boolean()
                .oneOf([true], "Please accept the terms & conditions"),
                frontPhoto : Yup.string()
                .required("File Required"),
                backPhoto : Yup.string()
                .required("File Required"),
                selfiePhoto : Yup.string()
                .required("File Required")
                })}

                onSubmit = {(values) => {
                    console.log("DOB :"+values.dob+
                                " DLno. :"+values.DLnumber);
                }}
            >

            {formik => (
                <form action="#" onSubmit={formik.handleSubmit} >
                
                <div className="input-container">
                <Label labelFor="dob" title="Date of birth *" />
                <Field name="dob" type="date" placeholder="Enter DOB" className={dobClass} />
                {formik.errors.dob && formik.touched.dob ? setDobClass("error-input") : setDobClass("correct-input")}
                <ErrorMessage name="dob" component="div" className="error-msg" />
                </div>

                <div className="input-container">
                <Label labelFor="method" title="Choose method *" />
                <Field as="select" name="method" placeholder="Enter Method" className={methodClass} type="text" >
                    <option value="DL">Driving Licence</option>
                    <option value="LL">Learning Licence</option>
                    <option value="Passport">Passport</option>
                    <option value="Aadhar">Aadhar Card</option>
                </Field>
                {formik.errors.method && formik.touched.method ? setmethodClass("error-input") : setmethodClass("correct-input")}
                <ErrorMessage name="method" className="error-msg" component="div" />
                </div>

                <div className="input-container">
                <Label labelFor="frontPhoto" title="Driving licence front photo *" />
                <Field name="forntPhoto" type="file" accept=".jpg, .png, .pdf" className={frontPhotoClass} />
                {formik.errors.frontPhoto && formik.touched.frontPhoto ? setfrontClass("error-input") : setfrontClass("correct-input")}
                <ErrorMessage name="frontPhoto" component="div" className="error-msg" />
                </div>

                <div className="input-container">
                <Label labelFor="backPhoto" title="Driving licence back photo *" />
                <Field name="backPhoto" type="file" accept=".jpg, .png, .pdf" className={backPhotoClass} />
                {formik.errors.backPhoto && formik.touched.backPhoto ? setBackClass("error-input") : setBackClass("correct-input")}
                <ErrorMessage name="backPhoto" className="error-msg" component="div" />
                </div>

                <div className="input-container">
                <Label labelFor="selfiePhoto" title="Selfie holding ID doc and note *" />
                <Field name="selfiePhoto" type="file" accept=".jpg, .png, .pdf" className={selfieClass} />
                {formik.errors.selfiePhoto && formik.touched.selfiePhoto ? setselfieClass("error-input"):setselfieClass("correct-input")}
                <ErrorMessage name="selfiePhoto" component="div" className="error-msg" />
                </div>

                <div className="input-container">
                <Label labelFor="DLnumber" title="Driving licence number *" />
                <Field name="DLnumber" type="number" placeholder="Enter DL Number" className={dlNumClass} />
                {formik.errors.DLnumber && formik.touched.DLnumber ? setDLnumClass("error-input"):setDLnumClass("correct-input")}
                <ErrorMessage name="DLnumber" className="error-msg" component="div" />
                </div>

                <div className="conditional-container" style={{height: 70}}>
                <div className="conditional-box">
                    <Field name="terms" type="checkbox"/>
                    <p>
                        Please accept<a href="www.google.com"className="links" > Terms of service </a>
                        and<a href="www.google.com" className="links" > Privacy Policy </a>
                    </p>
                </div>
                <ErrorMessage name="terms" className="error-msg" component="div" />
                </div>

                <div style={{marginTop:29}}>
                <SubmitBtn typeFor="submit" name="UPLOAD FILES" />
                </div>
            </form>
            )}
            </Formik>
        </>
    );
}

export default Form5;