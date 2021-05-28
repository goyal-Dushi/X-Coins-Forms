import React from "react";
import Warning from "../components/Warning";
import Label from "../components/Label";
import SubmitBtn from "../components/SubmitBtn";
import AttentionIcon from "../images/icons/attention-icon.svg";
import "../sass/forms.scss";
import "./form5.scss";

function Form5()
{
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

            <form action="#">
                
                <Label labelFor="dob" title="Date of birth *" />
                <input 
                type="date" 
                name="dob" 
                id="dob" />

                <Label labelFor="method" title="Choose method *" />
                <select name="method" id="method">
                    <option value="DL" selected >Driving Licence</option>
                    <option value="LL">Learning Licence</option>
                    <option value="Passport">Passport</option>
                    <option value="Aadhar">Aadhar Card</option>
                </select>

                <Label labelFor="front-photo" title="Driving licence front photo *" />
                <input
                accept=".jpg, .png, .pdf" 
                type="file" name="fornt-photo" id="front-photo" />

                <Label labelFor="back-photo" title="Driving licence back photo *" />
                <input
                accept=".jpg, .png, .pdf" 
                type="file" name="back-photo" id="back-photo" />

                <Label labelFor="selfie-photo" title="Selfie holding ID doc and note *" />
                <input
                accept=".jpg, .png"
                capture="user" 
                type="file" name="selfie-photo" id="selfie-photo" />

                <Label labelFor="DL-number" title="Driving licence number *" />
                <input
                type="number" name="DL-number" id="DL-number" />

                <div className="conditional-box">
                    <input type="checkbox" name="terms" id="terms" />
                    <p>
                        Please accept<a href="#"className="links" > Terms of service </a>
                        and<a href="#" className="links" > Privacy Policy </a>
                    </p>
                </div>

                <div style={{marginTop:39}}>
                <SubmitBtn typeFor="submit" name="UPLOAD FILES" />
                </div>
            </form>
        </>
    );
}

export default Form5;