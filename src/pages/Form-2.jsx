import React from "react";
import "../sass/forms.scss";
import "./form2.scss";
import Label from "../components/Label";
import SubmitBtn from "../components/SubmitBtn";
import { useHistory } from "react-router";
import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};

    if(!values.countryName){
        errors.countryName = "Required Country name";
    }
    if(!values.firstAddress){
        errors.firstAddress = "Required first address line";
    }
    if(!values.lastAddress){
        errors.lastAddress = "Required second address line";
    }
    if(!values.stateName){
        errors.stateName = "Required State name";
    }
    if(!values.cityName){
        errors.cityName = "Required City name";
    }
    if(!values.zipcode){
        errors.zipcode = "Required Zipcode";
    }
    if(!values.countryCode){
        errors.countryCode = "Required Country code";
    }
    if(!values.phoneNo){
        errors.phoneNo = "Required Phone number";
    }
    else if(values.phoneNo.length > 10){
        errors.phoneNo = "Length should be equal to 10"
    }

    return errors;
}

function Form2()
{

    const history = useHistory();

    const formik = useFormik({
        initialValues : {
            countryName : '',
            firstAddress : '',
            lastAddress : '',
            stateName : '',
            cityName : '',
            zipcode : '',
            countryCode : '',
            phoneNo : ''
        },
        validate,
        onSubmit: (values) => {
            console.log(
                "Country Name : "+values.countryName+
                " Country Code : "+values.countryCode+
                " State Name : "+values.stateName+
                " State Code : "+values.zipcode+
                " Phone No. : "+values.phoneNo
            );
            history.push("/sms");
        }
    })

    return(
        <form action="" onSubmit={formik.handleSubmit} >
            <Label labelFor="countryName" title="Country *" />
            <select 
            name="countryName" 
            id="country"
            value={formik.values.countryName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            >
                <option value="IN">India</option>
                <option value="US">United States</option>
            </select>
            {formik.touched.countryName && formik.errors.countryName ? (
                <div className="error-msg"> {formik.errors.countryName} </div>
            ): null}

            <Label labelFor="firstAddress" title="First line address *" />
            <input 
            type="text" 
            name="firstAddress" 
            id="firstAddress"
            value={formik.values.firstAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            />
            {formik.touched.firstAddress && formik.errors.firstAddress ? (
                    <div className="error-msg"> {formik.errors.firstAddress} </div>
            ): null}

            <Label labelFor="secondAddress" title="Second line address *" />
            <input 
            type="text" 
            name="lastAddress" 
            id="secondAddress"
            value={formik.values.lastAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            />
            {formik.touched.lastAddress && formik.errors.lastAddress ? (
                    <div className="error-msg"> {formik.errors.lastAddress} </div>
            ): null}

            <div className="input-wrapper">
                <div className="input-container">
                <Label labelFor="state" title="State/Province *" />
                <input 
                style={{width:267}}
                type="text" 
                name="stateName" 
                id="state"
                value={formik.values.stateName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                />
                {formik.touched.stateName && formik.errors.stateName ? (
                    <div className="error-msg"> {formik.errors.stateName} </div>
                ): null}
                </div>

                <div className="input-container">
                <Label labelFor="cityName" title="City/Town *" />
                <input
                style={{width:267}} 
                type="text" 
                name="cityName" 
                id="city"
                value={formik.values.cityName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                />
                {formik.touched.cityName && formik.errors.cityName ? (
                    <div className="error-msg"> {formik.errors.cityName} </div>
                ): null}
                </div>

            </div>
            
            <Label labelFor="zipcode" title="Zip code / Post code*" />
            <input 
            type="number" 
            name="zipcode" 
            id="zipcode"
            value={formik.values.zipcode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            />
            {formik.touched.zipcode && formik.errors.zipcode ? (
                    <div className="error-msg"> {formik.errors.zipcode} </div>
            ): null}
            
            <div className="input-wrapper">
                
                <div className="input-container">
                <Label labelFor="countryCode" title="Country code *" />
                <select 
                style={{width:170}} name="countryCode" id="countryCode"
                value={formik.values.countryCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value={91}>IN</option>
                    <option value={1}>US</option>
                </select>
                {formik.touched.countryCode && formik.errors.countryCode ? (
                    <div className="error-msg"> {formik.errors.countryCode} </div>
                ): null}
                </div>
                
                <div className="input-container">
                <Label labelFor="phoneNo" title="Phone number *" />
                <input
                style={{width:364}} 
                type="tel" 
                name="phoneNo" 
                id="phoneNo"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                />
                {formik.touched.phoneNo && formik.errors.phoneNo ? (
                    <div className="error-msg"> {formik.errors.phoneNo} </div>
                ): null}
                </div>

            </div>

            <div className="button">
            <SubmitBtn typeFor="submit" name="CONTINUE" />
            </div>
        </form>
    );
}

export default Form2;