import { useFormik } from "formik";
import React from "react";
import Warning from "../components/Warning";
import ClockIcon from "../images/icons/clock-icon.svg";
import Label from "../components/Label";
import SubmitButton from "../components/SubmitBtn";
import "../sass/forms.scss";

const validate =(values) => {
    const errors = {};

    if(!values.firstName){
        errors.firstName = "Required";
    }
    else if(values.firstName.length > 15){
        errors.firstName = "Must be less than 15 characters";
    }

    if(!values.lastName){
        errors.lastName = "Required";
    }
    else if(values.lastName.length > 10){
        errors.lastName = "Must be less than 10 characters";
    }

    if(!values.email){
        errors.email = "Required";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Incorrect Email address provided";
    }

    if(!values.password){
        errors.password = "Required";
    }
    else if(values.password.length < 5){
        errors.password = "Password Length too short";
    }

    return errors;
}

function Form1()
{
    const formik = useFormik({
        initialValues : {
            firstName : '',
            lastName : '',
            email : '',
            password : ''
        },
        validate,
        onSubmit: (values) => {
            console.log(
                "Form is successfully submitted :"+
                values.firstName+" "+
                values.lastName
            );
        }
    });
    
    return(
        <>

        <Warning imgSrc={ClockIcon} altImg="Clock-Icon" 
                    content="Once submitted,your profile cannot be changed. 
                    Please ensure that your information is correct." 
        />

        <form onSubmit={formik.handleSubmit}>
            <Label title="First name*" labelFor="firstName" />
            <input 
            type="text" 
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            placeholder="Enter First Name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
             <div className="error-msg" > {formik.errors.firstName} </div>   
            ): null}

            <Label labelFor="lastName" title="Last name*" />
            <input 
            type="text" 
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
             <div className="error-msg" > {formik.errors.lastName} </div>   
            ): null}

            <Label title="Email address*" labelFor="email" />
            <input 
            type="email" 
            name="email" 
            id="email"
            placeholder="Enter Email ID"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="error-msg" > {formik.errors.email} </div>
            ): null}

            <Label labelFor="password" title="Create Password" />
            <input 
            type="password" 
            name="password" 
            id="password"
            placeholder="Enter a Strong Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password} 
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="error-msg" > {formik.errors.password} </div>
            ): null}

            <div className="conditional-box" >
                <input type="checkbox" name="terms" id="terms" />
                <p>
                    By clicking «Continue» you agree to our <a href="#" className="links">Terms</a> ,<a href="#" className="links"> Cookies Policy </a> and 
                    <a href="#" className="links"> Privacy Policy </a>. You may receive email and SMS notifications from 
                    us and can opt out at any time.
                </p>
            </div>
            
            <div className="form-1-submitBtn">
            <SubmitButton name="CONTINUE"  typeFor="submit" />
            </div>
        </form>
        </>
    );
}

export default Form1;