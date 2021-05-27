import React from "react";
import Warning from "../components/Warning";
import ClockImg from "../images/icons/clock-icon.svg";
import Label from "../components/Label";
import "./formUPD.scss";
import SubmitBtn from "../components/SubmitBtn";
import { useFormik } from "formik";
import { useHistory } from "react-router";

const validate = (values) => {
    const errors = {};
    
    if(!values.pincode1){
        errors.pincode1 = "Required field 1";
    }
    if(!values.pincode2){
        errors.pincode2 = "Required field 2";
    }
    if(!values.pincode3){
        errors.pincode3 = "Required field 3";
    }
    if(!values.pincode4){
        errors.pincode4 = "Required field 4";
    }

    return errors;
}

function Form1_UPD()
{
    const history = useHistory();

    const formik = useFormik({
        initialValues : {
            pincode1: null,
            pincode2: null,
            pincode3 : null,
            pincode4: null
        },
        validate,
        onSubmit : (values) => {
            console.log("Pincode : "+values.pincode1+values.pincode2+values.pincode3+values.pincode4);
            history.push("/personalDetails");
        }
    });

    return(
        <>
            <Warning
            height={72} 
            imgSrc={ClockImg}
            content="We've sent your email address a code. Please
                    input the 4 digit code here to verify your email
                    address" 
            />
            
            <form className="form-UPD" action="#" onSubmit={formik.handleSubmit} >

            <div className="label-container">
            <Label labelFor="pin-container" title="4 digit code" />
            </div>

            <div className="pin-container">
                <input 
                type="number" 
                name="pincode1" 
                id="pincode1" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pincode1}
                />
                {formik.touched.pincode1 && formik.errors.pincode1 ? (
                    <div className="error-msg"> {formik.errors.pincode1} </div>
                ): null}

                <input 
                type="number" 
                name="pincode2" 
                id="pincode2" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pincode2}
                />
                {formik.touched.pincode2 && formik.errors.pincode2 ? (
                    <div className="error-msg"> {formik.errors.pincode2} </div>
                ): null}

                <input 
                type="number" 
                name="pincode3" 
                id="pincode3" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pincode3}
                />
                {formik.touched.pincode3 && formik.errors.pincode3 ? (
                    <div className="error-msg"> {formik.errors.pincode3} </div>
                ): null}

                <input 
                type="number" 
                name="pincode4" 
                id="pincode4" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pincode4}
                />
                {formik.touched.pincode4 && formik.errors.pincode4 ? (
                    <div className="error-msg"> {formik.errors.pincode4} </div>
                ): null}

            </div>

            <div className="form1UPD-submit-btn">
            <SubmitBtn typeFor="submit" name="RESEND CODE" />
            </div>
            </form>
        </>
    );
}

export default Form1_UPD;