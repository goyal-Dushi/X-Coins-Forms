import React, { useState } from "react";
import Label from "../components/Label";
import BlueBtn from "../components/BlueBtn";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

function UpdatePhone(props) {
  const [countryCodeClass, setCountryCodeClass] = useState("correct-input");
  const [phoneClass, setPhoneClass] = useState("correct-input");

  return (
    <>
      <Formik
        initialValues={{
          countryCode: "",
          phoneNum: "",
        }}
        validationSchema={Yup.object({
          countryCode: Yup.number().required("Select country code"),
          phoneNum: Yup.number()
            .required("Required Field")
            .max(9999999999, "Invalid Number")
            .min(1000000000, "Invalid Number"),
        })}
        onSubmit={(values) => {
          console.log(
            "Country Code : " +
              values.countryCode +
              " Phone : " +
              values.phoneNum
          );
        }}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className='input-wrapper'>
              <div className='input-container'>
                <Label labelFor='countryCode' title='Country code *' />
                <Field
                  style={{ width: 170 }}
                  name='countryCode'
                  className={countryCodeClass}
                  as={"select"}
                  type='number'>
                  <option value={91}>IN</option>
                  <option value={1}>US</option>
                </Field>
                {formik.errors.countryCode && formik.touched.countryCode
                  ? setCountryCodeClass("error-input")
                  : setCountryCodeClass("correct-input")}
                <ErrorMessage
                  name='countryCode'
                  className='error-msg'
                  component='div'
                />
              </div>
              <div className='input-container'>
                <Label labelFor='phoneNum' title='Phone number *' />
                <Field
                  name='phoneNum'
                  type={"number"}
                  style={{ width: 199 }}
                  className={phoneClass}
                />
                {formik.errors.phoneNum && formik.touched.phoneNum
                  ? setPhoneClass("error-input")
                  : setPhoneClass("correct-input")}
                <ErrorMessage
                  name='phoneNum'
                  className='error-msg'
                  component='div'
                />
              </div>
              <div
                style={{ marginLeft: 19, marginTop: 45 }}
                onClick={() => props.function(false)}>
                <BlueBtn btnWidth={146} type='submit' title='SEND CODE' />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default UpdatePhone;
