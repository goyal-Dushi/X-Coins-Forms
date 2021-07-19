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

  if (!values.pincode1) {
    errors.pincode1 = "Required field 1";
  } else if (values.pincode1 > 9 || values.pincode1 < 0) {
    errors.pincode1 = "Field 1: only single digit poitive value accepted";
  }
  if (!values.pincode2) {
    errors.pincode2 = "Required field 2";
  } else if (values.pincode2 > 9 || values.pincode2 < 0) {
    errors.pincode2 = "Field 2: only single digit positive value accepted";
  }
  if (!values.pincode3) {
    errors.pincode3 = "Required field 3";
  } else if (values.pincode3 > 9 || values.pincode3 < 0) {
    errors.pincode3 = "Field 3: only single digit positive value accepted";
  }
  if (!values.pincode4) {
    errors.pincode4 = "Required field 4";
  } else if (values.pincode4 > 9 || values.pincode4 < 0) {
    errors.pincode4 = "Field 4: only single digit positive value accepted";
  }

  return errors;
};

function Form1_UPD() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      pincode1: "",
      pincode2: "",
      pincode3: "",
      pincode4: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(
        "Pincode : " +
          values.pincode1 +
          values.pincode2 +
          values.pincode3 +
          values.pincode4
      );
      history.push("/personalDetails");
    },
  });

  return (
    <React.Fragment>
      <Warning
        height={72}
        imgSrc={ClockImg}
        content="We've sent your email address a code. Please
                    input the 4 digit code here to verify your email
                    address"
      />

      <form className='form-UPD' action='#' onSubmit={formik.handleSubmit}>
        <div className='label-container'>
          <Label labelFor='pin-container' title='4 digit code' />
        </div>

        <div className='pin-container'>
          <input
            type='number'
            name='pincode1'
            id='pincode1'
            min={0}
            pattern='/[^0-9]|^0+(?!$)/g'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pincode1}
          />

          <input
            type='number'
            name='pincode2'
            id='pincode2'
            min={0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pincode2}
          />

          <input
            type='number'
            name='pincode3'
            id='pincode3'
            min={0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pincode3}
          />

          <input
            type='number'
            name='pincode4'
            id='pincode4'
            min={0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pincode4}
          />
        </div>
        {formik.touched.pincode1 && formik.errors.pincode1 ? (
          <div className='error-msg'> {formik.errors.pincode1} </div>
        ) : null}
        {formik.touched.pincode2 && formik.errors.pincode2 ? (
          <div className='error-msg'> {formik.errors.pincode2} </div>
        ) : null}
        {formik.touched.pincode3 && formik.errors.pincode3 ? (
          <div className='error-msg'> {formik.errors.pincode3} </div>
        ) : null}
        {formik.touched.pincode4 && formik.errors.pincode4 ? (
          <div className='error-msg'> {formik.errors.pincode4} </div>
        ) : null}

        <div className='form1UPD-submit-btn'>
          <SubmitBtn typeFor='submit' name='RESEND CODE' />
        </div>
      </form>
    </React.Fragment>
  );
}

export default Form1_UPD;
