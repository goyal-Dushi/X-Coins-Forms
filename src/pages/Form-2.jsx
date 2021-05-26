import React from "react";
import "./form2.scss";
import "../sass/forms.scss";
import Label from "../components/Label";
import SubmitBtn from "../components/SubmitBtn";

function Form2()
{
    return(
        <form action="">
            <Label labelFor="country" title="Country *" />
            <select 
            name="country" 
            id="country"
            >
                <option value="IN">India</option>
                <option value="US">United States</option>
            </select>

            <Label labelFor="firstAddress" title="First line address *" />
            <input 
            type="text" 
            name="firstAddress" 
            id="firstAddress" 
            />

            <Label labelFor="secondAddress" title="Second line address *" />
            <input 
            type="text" 
            name="secondAddress" 
            id="secondAddress" 
            />

            <div className="input-wrapper">
                <div className="input-container">
                <Label labelFor="state" title="State/Province *" />
                <input 
                className="state-input"
                type="text" 
                name="state" 
                id="state" />
                </div>

                <div className="input-container">
                <Label labelFor="city" title="City/Town *" />
                <input
                className="city-input" 
                type="text" 
                name="city" 
                id="city" />
                </div>

            </div>
            
            <Label labelFor="zipcode" title="Zip code / Post code*" />
            <input 
            type="number" 
            name="zipcode" 
            id="zipcode" />
            
            <div className="input-wrapper">
                
                <div className="input-container">
                <Label labelFor="countryCode" title="Country code *" />
                <select className="country-code" name="countryCode" id="countryCode">
                    <option value="IN">IN</option>
                    <option value="US">US</option>
                </select>
                </div>
                
                <div className="input-container">
                <Label labelFor="phoneNo" title="Phone number *" />
                <input
                className="phone-input" 
                type="tel" 
                name="phoneNo" 
                id="phoneNo" />
                </div>

            </div>

            <div className="button">
            <SubmitBtn typeFor="submit" name="CONTINUE" />
            </div>
        </form>
    );
}

export default Form2;