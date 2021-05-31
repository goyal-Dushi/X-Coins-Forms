import React, { useState } from "react";
import "../sass/forms.scss";
import "./form2.scss";
import Label from "../components/Label";
import SubmitBtn from "../components/SubmitBtn";
import { useHistory } from "react-router";
import { ErrorMessage, Field, Formik} from "formik";
import * as Yup from "yup"

function Form2()
{

    const history = useHistory();
    const [countryNameclass, setCountNameClass] = useState('correct-input');
    const [firstAddclass, setfirstAddClass] = useState('correct-input');
    const [secondAddclass, setSecondAddClass] = useState('correct-input');
    const [stateNameclass, setStateNameClass] = useState('correct-input');
    const [cityNameclass, setCityNameClass] = useState('correct-input');
    const [zipcodeclass, setzipcodeClass] = useState('correct-input');
    const [countryCodeclass, setCountCodeClass] = useState('correct-input');
    const [phonoeclass, setPhoneClass] = useState('correct-input');
    
    return(

        <Formik 
        initialValues = {{
            countryName : '',
            firstAddress : '',
            lastAddress : '',
            stateName : '',
            cityName : '',
            zipcode : '',
            countryCode : '',
            phoneNo : ''
        }}
        validationSchema = {Yup.object({
            countryName : Yup.string()
            .required("Required Country Name"),
            firstAddress : Yup.string()
            .required("Required First Address Field"),
            lastAddress : Yup.string()
            .required("Required Second Address Field"),
            stateName : Yup.string()
            .required("Required State Name"),
            cityName : Yup.string()
            .required("Required City name"),
            zipcode : Yup.number()
            .max(999999, "Max lenght cannot exceed 6 digits")
            .required("Required zipcode"),
            countryCode : Yup.string()
            .required("Required Country code"),
            phoneNo : Yup.number()
            .required("Required Phone number")
            .positive("Negative Number")
            .max(9999999999,"Invalid Number")
            .min(1000000000, "Invalid Number")

        })}
        onSubmit = {(values) => {
            console.log(
                "Country Name : "+values.countryName+
                " Country Code : "+values.countryCode+
                " State Name : "+values.stateName+
                " State Code : "+values.zipcode+
                " Phone No. : "+values.phoneNo
            );
            history.push("/sms");
        }
    }
    >
    
        {formik => (
            <form action="" onSubmit={formik.handleSubmit} >
            
            <div className="input-container">
            <Label labelFor="countryName" title="Country *" />
            <Field className={countryNameclass} as="select" placeholder="Select Country Name" name="countryName" >
                <option value="IN">India</option>
                <option value="US">United States</option>
            </Field>
            {formik.errors.countryName && formik.touched.countryName ? setCountNameClass('error-input'): setCountNameClass('correct-input')}
            <ErrorMessage name="countryName" component="div" className="error-msg" />
            </div>

            <div className="input-container">
            <Label labelFor="firstAddress" title="First line address *" />
            <Field className={firstAddclass} type="text" placeholder="First Address Line" name="firstAddress" />
            {formik.errors.firstAddress && formik.touched.firstAddress ? setfirstAddClass('error-input'): setfirstAddClass('correct-input')}
            <ErrorMessage name="firstAddress" component="div" className="error-msg" />
            </div>

            <div className="input-container">
            <Label labelFor="lastAddress" title="Second line address *" />
            <Field className={secondAddclass} type="text" name="lastAddress" placeholder="Second Address Line" />
            {formik.errors.lastAddress && formik.touched.lastAddress ? setSecondAddClass('error-input'): setSecondAddClass('correct-input')}
            <ErrorMessage name="lastAddress" component="div" className="error-msg" />
            </div>

            <div className="input-wrapper">
                <div style={{maxWidth:267}} className="input-container">
                <Label labelFor="state" title="State/Province *" />
                <Field style={{width:267}} className={stateNameclass} name="stateName" placeholder="State Name" type="text" />
                {formik.errors.stateName && formik.touched.stateName ? setStateNameClass('error-input'): setStateNameClass('correct-input')}
                <ErrorMessage name="stateName" className="error-msg" component="div" />
                </div>

                <div className="input-container" style={{maxWidth:267}}>
                <Label labelFor="cityName" title="City/Town *" />
                <Field style={{width:267}} name="cityName" className={cityNameclass} placeholder="City Name" type="text" />
                {formik.errors.cityName && formik.touched.cityName ? setCityNameClass('error-input'): setCityNameClass('correct-input')}
                <ErrorMessage name="cityName" component="div" className="error-msg" />
                </div>
            </div>
            
            <div className="input-container">
            <Label labelFor="zipcode" title="Zip code / Post code*" />
            <Field name="zipcode" type="number" className={zipcodeclass} placeholder="Zipcode" />
            {formik.errors.zipcode && formik.touched.zipcode ? setzipcodeClass('error-input'): setzipcodeClass('correct-input')}
            <ErrorMessage name="zipcode" component="div" className="error-msg" />
            </div>
            
            <div className="input-wrapper">
                <div className="input-container" style={{maxWidth:170}} >
                <Label labelFor="countryCode" title="Country code *" />
                <Field style={{width:170}} as="select" className={countryCodeclass}  name="countryCode" type="text" >
                    <option value={91} >IN</option>
                    <option value={1}>US</option>
                </Field>
                {formik.errors.countryCode && formik.touched.countryCode ? setCountCodeClass('error-input'): setCountCodeClass('correct-input')}
                <ErrorMessage name="countryCode" component="div" className="error-msg" />
                </div>
                <div style={{maxWidth:364}} className="input-container">
                <Label labelFor="phoneNo" title="Phone number *" />
                <Field style={{width:364}} type="tel" className={phonoeclass} placeholder="Enter Phone number" name="phoneNo" />
                {formik.errors.phoneNo && formik.touched.phoneNo ? setPhoneClass('error-input'): setPhoneClass('correct-input')}
                <ErrorMessage name="phoneNo" component="div" className="error-msg" />
                </div>
            </div>

            <div className="button">
            <SubmitBtn typeFor="submit" name="CONTINUE" />
            </div>
        </form>
        )}
        </Formik>
    );
}

export default Form2;