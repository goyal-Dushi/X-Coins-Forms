import { ErrorMessage, Field, Formik} from "formik";
import React, { useState } from "react";
import Warning from "../components/Warning";
import ClockIcon from "../images/icons/clock-icon.svg";
import Label from "../components/Label";
import SubmitButton from "../components/SubmitBtn";
import "../sass/forms.scss";
import ReCaptchaV2 from "react-google-recaptcha";
import { useHistory } from "react-router";
import * as Yup from "yup";

function Form1()
{
    const history = useHistory();
    const [firstNameClass, setfirstNameClass] = useState('correct-input');
    const [lastNameClass, setlastNameClass] = useState('correct-input');
    const [emailClass, setemailClass] = useState('correct-input');
    const [passwordClass, setpasswordClass] = useState('correct-input');
    return(     
        <Formik
        initialValues = {{
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            terms : false
        }}
        validationSchema = { Yup.object({
            firstName: Yup.string()
            .max(12, "Must be 12 characters or less")
            .required("Required Field"),
            lastName : Yup.string()
            .max(12, "Must be 12 characters or less")
            .required("Required Field"),
            email : Yup.string()
            .email("Invalid email ID provided")
            .required("Required Field"),
            password : Yup.string()
            .max(15, "Must be of max 15 characters")
            .min(4, "Cannot be less than 4 characters")
            .required("Required Field")
            .matches("(?=.*[A-Z])", "Must contain atlease one UPPERCASE char")
            .matches("(?=.*[a-z])","Must contain atleast one lowercase char")
            .matches("(?=.*[-+_!@#$%^&*., ?])", "Must contain atleast one special character"),
            terms: Yup.boolean()
            .oneOf([true], "Must accept the terms and conditions first")
        }) }
        onSubmit = {(values) => {
            console.log(
                "Form is successfully submitted :"+
                values.firstName+" "+
                values.lastName
            );  
            history.push("/upd");
        }
    }
    >

         {formik => (
         <>
         <Warning imgSrc={ClockIcon} altImg="Clock-Icon"
                    height={72} 
                    content="Once submitted,your profile cannot be changed. 
                    Please ensure that your information is correct." 
        />

        <form onSubmit={formik.handleSubmit}>

            <div className="input-container" >
            <Label title="First name*" labelFor="firstName" />
            <Field autocomplete="off" name="firstName" type="text" placeholder="Enter First Name" className={firstNameClass} />
            {formik.errors.firstName && formik.touched.firstName ? setfirstNameClass('error-input') : setfirstNameClass('correct-input')}
            <ErrorMessage style={{display:"block"}} name="firstName" className="error-msg" component="div" />
            </div>
            
            <div className="input-container">
            <Label labelFor="#lastName" title="Last name*" />
            <Field autocomplete="off" name="lastName" type="text" placeholder="Enter Last Name" className={lastNameClass} />
            {formik.errors.lastName && formik.touched.lastName ? setlastNameClass('error-input') : setlastNameClass('correct-input')}
            <ErrorMessage name="lastName" className="error-msg" component="div" />
            </div>

            <div className="input-container">
            <Label title="Email address*" labelFor="#email" />
            <Field autocomplete="off" type="text" name="email" placeholder="Enter Email ID" className={emailClass} />
            {formik.errors.email && formik.touched.email ? setemailClass('error-input') : setemailClass('correct-input')}
            <ErrorMessage name="email" component="div" className="error-msg" />
            </div>

            <div className="input-container">
            <Label labelFor="password" title="Create Password" />
            <Field name="password" placeholder="Enter Password" type="password" className={passwordClass} />
            {formik.errors.password && formik.touched.password ? setpasswordClass('error-input') : setpasswordClass('correct-input')}
            <ErrorMessage name="password" component="div" className="error-msg" />
            </div>

            <div className="conditional-container">
            <div className="conditional-box" >
                <Field type="checkbox" name="terms" />
                <p>
                    By clicking «Continue» you agree to our <a href="#" className="links">Terms</a> ,<a href="#" className="links"> Cookies Policy </a> and 
                    <a href="#" className="links"> Privacy Policy </a>. You may receive email and SMS notifications from 
                    us and can opt out at any time.
                </p>
            </div>
            <ErrorMessage name="terms" component="div" className="error-msg" />
            </div>

            <ReCaptchaV2 sitekey={process.env.REACT_APP_SITE_KEY} />
            <div style={{marginTop:40}}>
            <SubmitButton name="CONTINUE"  typeFor="submit" />
            </div>
        </form>
        </>
     )}
     </Formik>  
    );
}

export default Form1;