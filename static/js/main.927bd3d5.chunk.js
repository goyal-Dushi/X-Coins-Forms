(this["webpackJsonpx-coins-forms"]=this["webpackJsonpx-coins-forms"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(24),a=n.n(r),i=(n(34),n(27)),o=n(2),c=n(12),l=(n(37),n(0));var d=function(e){return Object(l.jsxs)("div",{style:{height:e.height},className:"warning-rect",children:[Object(l.jsx)("img",{className:"warning-icon",src:e.imgSrc,alt:e.imgSrc}),e.content]})},u=n.p+"static/media/clock-icon.e0d15e0f.svg";n(39);var m=function(e){return Object(l.jsx)("label",{htmlFor:e.labelFor,children:e.title})};n(40);var j=function(e){return Object(l.jsx)("button",{className:"green-btn",type:e.typeFor,children:e.name})},h=(n(15),n(29)),b=function(e){var t={};return e.firstName?e.firstName.length>15&&(t.firstName="Must be less than 15 characters"):t.firstName="Required",e.lastName?e.lastName.length>10&&(t.lastName="Must be less than 10 characters"):t.lastName="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Incorrect Email address provided"):t.email="Required",e.password?e.password.length<5&&(t.password="Password Length too short"):t.password="Required",e.terms||(t.terms="Please accept the terms and Conditions"),t};var p=function(){var e=Object(o.f)(),t=Object(c.a)({initialValues:{firstName:"",lastName:"",email:"",password:"",terms:!1},validate:b,onSubmit:function(t){console.log("Form is successfully submitted :"+t.firstName+" "+t.lastName),e.push("/upd")}});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{imgSrc:u,altImg:"Clock-Icon",height:72,content:"Once submitted,your profile cannot be changed.  Please ensure that your information is correct."}),Object(l.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(l.jsx)(m,{title:"First name*",labelFor:"firstName"}),Object(l.jsx)("input",{type:"text",id:"firstName",name:"firstName",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.firstName,autoComplete:"off",placeholder:"Enter First Name"}),t.touched.firstName&&t.errors.firstName?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.firstName," "]}):null,Object(l.jsx)(m,{labelFor:"lastName",title:"Last name*"}),Object(l.jsx)("input",{type:"text",id:"lastName",name:"lastName",autoComplete:"off",placeholder:"Enter Last Name",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.lastName}),t.touched.lastName&&t.errors.lastName?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.lastName," "]}):null,Object(l.jsx)(m,{title:"Email address*",labelFor:"email"}),Object(l.jsx)("input",{type:"email",name:"email",id:"email",autoComplete:"off",placeholder:"Enter Email ID",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email}),t.touched.email&&t.errors.email?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.email," "]}):null,Object(l.jsx)(m,{labelFor:"password",title:"Create Password"}),Object(l.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Enter a Strong Password",onBlur:t.handleBlur,onChange:t.handleChange,value:t.values.password}),t.touched.password&&t.errors.password?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.password," "]}):null,Object(l.jsxs)("div",{className:"conditional-box",children:[Object(l.jsx)("input",{type:"checkbox",name:"terms",id:"terms",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.terms}),Object(l.jsxs)("p",{children:["By clicking \xabContinue\xbb you agree to our ",Object(l.jsx)("a",{href:"#",className:"links",children:"Terms"})," ,",Object(l.jsx)("a",{href:"#",className:"links",children:" Cookies Policy "})," and",Object(l.jsx)("a",{href:"#",className:"links",children:" Privacy Policy "}),". You may receive email and SMS notifications from us and can opt out at any time."]})]}),t.errors.terms&&t.touched.terms?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.terms," "]}):null,Object(l.jsx)(h.a,{sitekey:"6LeOrPcaAAAAAOor_6HpXLDKipTY0FknggQaXsWM"}),Object(l.jsx)("div",{style:{marginTop:40},children:Object(l.jsx)(j,{name:"CONTINUE",typeFor:"submit"})})]})]})},x=(n(46),function(e){var t={};return e.pincode1?(e.pincode1>9||e.pincode1<0)&&(t.pincode1="Field 1: only single digit poitive value accepted"):t.pincode1="Required field 1",e.pincode2?(e.pincode2>9||e.pincode2<0)&&(t.pincode2="Field 2: only single digit positive value accepted"):t.pincode2="Required field 2",e.pincode3?(e.pincode3>9||e.pincode3<0)&&(t.pincode3="Field 3: only single digit positive value accepted"):t.pincode3="Required field 3",e.pincode4?(e.pincode4>9||e.pincode4<0)&&(t.pincode4="Field 4: only single digit positive value accepted"):t.pincode4="Required field 4",t});var O=function(){var e=Object(o.f)(),t=Object(c.a)({initialValues:{pincode1:null,pincode2:null,pincode3:null,pincode4:null},validate:x,onSubmit:function(t){console.log("Pincode : "+t.pincode1+t.pincode2+t.pincode3+t.pincode4),e.push("/personalDetails")}});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{height:72,imgSrc:u,content:"We've sent your email address a code. Please input the 4 digit code here to verify your email address"}),Object(l.jsxs)("form",{className:"form-UPD",action:"#",onSubmit:t.handleSubmit,children:[Object(l.jsx)("div",{className:"label-container",children:Object(l.jsx)(m,{labelFor:"pin-container",title:"4 digit code"})}),Object(l.jsxs)("div",{className:"pin-container",children:[Object(l.jsx)("input",{type:"number",name:"pincode1",id:"pincode1",min:0,pattern:"/[^0-9]|^0+(?!$)/g",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.pincode1}),Object(l.jsx)("input",{type:"number",name:"pincode2",id:"pincode2",min:0,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.pincode2}),Object(l.jsx)("input",{type:"number",name:"pincode3",id:"pincode3",min:0,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.pincode3}),Object(l.jsx)("input",{type:"number",name:"pincode4",id:"pincode4",min:0,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.pincode4})]}),t.touched.pincode1&&t.errors.pincode1?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.pincode1," "]}):null,t.touched.pincode2&&t.errors.pincode2?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.pincode2," "]}):null,t.touched.pincode3&&t.errors.pincode3?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.pincode3," "]}):null,t.touched.pincode4&&t.errors.pincode4?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.pincode4," "]}):null,Object(l.jsx)("div",{className:"form1UPD-submit-btn",children:Object(l.jsx)(j,{typeFor:"submit",name:"RESEND CODE"})})]})]})},N=(n(23),function(e){var t={};return e.countryName||(t.countryName="Required Country name"),e.firstAddress||(t.firstAddress="Required first address line"),e.lastAddress||(t.lastAddress="Required second address line"),e.stateName||(t.stateName="Required State name"),e.cityName||(t.cityName="Required City name"),e.zipcode?e.zipcode>999999&&(t.zipcode="Max length allowed : 6"):t.zipcode="Required Zipcode",e.countryCode||(t.countryCode="Required Country code"),e.phoneNo?(e.phoneNo.length>10||e.phoneNo.length<10)&&(t.phoneNo="Length should be equal to 10"):t.phoneNo="Required Phone number",t});var v=function(){var e=Object(o.f)(),t=Object(c.a)({initialValues:{countryName:"",firstAddress:"",lastAddress:"",stateName:"",cityName:"",zipcode:"",countryCode:"",phoneNo:""},validate:N,onSubmit:function(t){console.log("Country Name : "+t.countryName+" Country Code : "+t.countryCode+" State Name : "+t.stateName+" State Code : "+t.zipcode+" Phone No. : "+t.phoneNo),e.push("/sms")}});return Object(l.jsxs)("form",{action:"",onSubmit:t.handleSubmit,children:[Object(l.jsx)(m,{labelFor:"countryName",title:"Country *"}),Object(l.jsxs)("select",{name:"countryName",id:"country",value:t.values.countryName,onChange:t.handleChange,onBlur:t.handleBlur,children:[Object(l.jsx)("option",{value:"IN",selected:!0,children:"India"}),Object(l.jsx)("option",{value:"US",children:"United States"})]}),t.touched.countryName&&t.errors.countryName?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.countryName," "]}):null,Object(l.jsx)(m,{labelFor:"firstAddress",title:"First line address *"}),Object(l.jsx)("input",{type:"text",name:"firstAddress",autoComplete:"off",id:"firstAddress",value:t.values.firstAddress,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.firstAddress&&t.errors.firstAddress?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.firstAddress," "]}):null,Object(l.jsx)(m,{labelFor:"secondAddress",title:"Second line address *"}),Object(l.jsx)("input",{type:"text",name:"lastAddress",id:"secondAddress",autoComplete:"off",value:t.values.lastAddress,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.lastAddress&&t.errors.lastAddress?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.lastAddress," "]}):null,Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)(m,{labelFor:"state",title:"State/Province *"}),Object(l.jsx)("input",{style:{width:267},type:"text",name:"stateName",id:"state",autoComplete:"off",value:t.values.stateName,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.stateName&&t.errors.stateName?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.stateName," "]}):null]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)(m,{labelFor:"cityName",title:"City/Town *"}),Object(l.jsx)("input",{style:{width:267},type:"text",name:"cityName",id:"city",autoComplete:"off",value:t.values.cityName,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.cityName&&t.errors.cityName?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.cityName," "]}):null]})]}),Object(l.jsx)(m,{labelFor:"zipcode",title:"Zip code / Post code*"}),Object(l.jsx)("input",{type:"number",name:"zipcode",id:"zipcode",value:t.values.zipcode,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.zipcode&&t.errors.zipcode?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.zipcode," "]}):null,Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)(m,{labelFor:"countryCode",title:"Country code *"}),Object(l.jsxs)("select",{style:{width:170},name:"countryCode",id:"countryCode",value:t.values.countryCode,onChange:t.handleChange,onBlur:t.handleBlur,children:[Object(l.jsx)("option",{value:91,selected:!0,children:"IN"}),Object(l.jsx)("option",{value:1,children:"US"})]}),t.touched.countryCode&&t.errors.countryCode?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.countryCode," "]}):null]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)(m,{labelFor:"phoneNo",title:"Phone number *"}),Object(l.jsx)("input",{style:{width:364},type:"tel",name:"phoneNo",autoComplete:"off",id:"phoneNo",value:t.values.phoneNo,onChange:t.handleChange,onBlur:t.handleBlur}),t.touched.phoneNo&&t.errors.phoneNo?Object(l.jsxs)("div",{className:"error-msg",children:[" ",t.errors.phoneNo," "]}):null]})]}),Object(l.jsx)("div",{className:"button",children:Object(l.jsx)(j,{typeFor:"submit",name:"CONTINUE"})})]})},f=n(28);n(47);var g=function(e){return Object(l.jsx)("button",{className:"blue-btn",type:e.type,style:{width:e.btnWidth},children:e.title})},y=(n(48),function(e){var t={};return e.smsNumber?(e.smsNumber>999999||e.smsNumber<99999)&&(t.smsNumber="Length should be equal to 6"):t.smsNumber="Please type in the Code send to you via SMS",t});var C=function(){var e=Object(s.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(o.f)(),i=Object(c.a)({initialValues:{smsNumber:""},validate:y,onSubmit:function(e){console.log("SMS CODE IS : "+e.smsNumber),a.push("/verifyID")}});return Object(l.jsxs)(l.Fragment,{children:[n?Object(l.jsx)("form",{action:"#",children:Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)(m,{labelFor:"country-code",title:"Country code *"}),Object(l.jsxs)("select",{style:{width:170},name:"country-code",id:"country-code",children:[Object(l.jsx)("option",{value:"IN",children:"IN"}),Object(l.jsx)("option",{value:"US",children:"US"})]})]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)(m,{labelFor:"phoneNo",title:"Phone number *"}),Object(l.jsx)("input",{style:{width:199},type:"tel",name:"phoneNo",id:"phoneNo"})]}),Object(l.jsx)("div",{style:{marginLeft:19,marginTop:45},onClick:function(){return r(!1)},children:Object(l.jsx)(g,{btnWidth:146,type:"submit",title:"SEND CODE"})})]})}):Object(l.jsx)("div",{className:"info-container",children:Object(l.jsxs)("p",{children:["Please enter seven digit code we just sent to your number ",Object(l.jsx)("span",{children:"+202-502-5899"}),Object(l.jsx)("a",{type:"button",onClick:function(){return r(!0)},className:"links",children:" Change "})]})}),Object(l.jsxs)("form",{action:"#",onSubmit:i.handleSubmit,children:[Object(l.jsx)(m,{labelFor:"smsNumber",title:"SMS Code*"}),Object(l.jsx)("input",{type:"number",name:"smsNumber",id:"sms-code",value:i.values.smsNumber,onBlur:i.handleBlur,onChange:i.handleChange}),i.touched.smsNumber&&i.errors.smsNumber?Object(l.jsxs)("div",{className:"error-msg",children:[" ",i.errors.smsNumber," "]}):null,Object(l.jsx)("div",{style:{marginTop:18,textAlign:"center",width:553},className:"conditional-box",children:Object(l.jsxs)("p",{children:["You have 3 attempts left.Didn't receive the SMS.",Object(l.jsx)("a",{href:"#",className:"links",children:" Resend SMS Code "})]})}),Object(l.jsx)("div",{style:{marginTop:34},children:Object(l.jsx)(j,{typeFor:"submit",name:"VERIFY PHONE NUMBER"})})]})]})},F=n.p+"static/media/attention-icon.65235be9.svg";n(49);var S=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{height:116,imgSrc:F,content:"Follow instructions to start buying cryptocurrencies via Xcoins: 1) Upload the front and back of your government issued ID 2) Please take a selfie holding your identity document and a note with today\u2019s date and \xabXcoins\xbb written on it"}),Object(l.jsxs)("form",{action:"#",children:[Object(l.jsx)(m,{labelFor:"dob",title:"Date of birth *"}),Object(l.jsx)("input",{type:"date",name:"dob",id:"dob"}),Object(l.jsx)(m,{labelFor:"method",title:"Choose method *"}),Object(l.jsxs)("select",{name:"method",id:"method",children:[Object(l.jsx)("option",{value:"DL",selected:!0,children:"Driving Licence"}),Object(l.jsx)("option",{value:"LL",children:"Learning Licence"}),Object(l.jsx)("option",{value:"Passport",children:"Passport"}),Object(l.jsx)("option",{value:"Aadhar",children:"Aadhar Card"})]}),Object(l.jsx)(m,{labelFor:"front-photo",title:"Driving licence front photo *"}),Object(l.jsx)("input",{accept:".jpg, .png, .pdf",type:"file",name:"fornt-photo",id:"front-photo"}),Object(l.jsx)(m,{labelFor:"back-photo",title:"Driving licence back photo *"}),Object(l.jsx)("input",{accept:".jpg, .png, .pdf",type:"file",name:"back-photo",id:"back-photo"}),Object(l.jsx)(m,{labelFor:"selfie-photo",title:"Selfie holding ID doc and note *"}),Object(l.jsx)("input",{accept:".jpg, .png",capture:"user",type:"file",name:"selfie-photo",id:"selfie-photo"}),Object(l.jsx)(m,{labelFor:"DL-number",title:"Driving licence number *"}),Object(l.jsx)("input",{type:"number",name:"DL-number",id:"DL-number"}),Object(l.jsxs)("div",{className:"conditional-box",children:[Object(l.jsx)("input",{type:"checkbox",name:"terms",id:"terms"}),Object(l.jsxs)("p",{children:["Please accept",Object(l.jsx)("a",{href:"#",className:"links",children:" Terms of service "}),"and",Object(l.jsx)("a",{href:"#",className:"links",children:" Privacy Policy "})]})]}),Object(l.jsx)("div",{style:{marginTop:39},children:Object(l.jsx)(j,{typeFor:"submit",name:"UPLOAD FILES"})})]})]})};n(50);var B=function(e){return Object(l.jsx)("h1",{className:"form-head",children:e.title})};n(51);var w=function(e){return Object(l.jsxs)("div",{className:"circle-wrapper",children:[Object(l.jsx)("div",{className:"circle",children:e.content}),Object(l.jsx)(m,{labelFor:e.content,title:e.labelHead,style:{fontWeight:"bold"}})]})};var A=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(B,{title:"Create account"}),Object(l.jsxs)("div",{className:"circle-container",children:[Object(l.jsx)(w,{content:"1",labelHead:"Account setup"}),Object(l.jsx)("hr",{}),Object(l.jsx)(w,{content:"2",labelHead:"Personal details"}),Object(l.jsx)("hr",{}),Object(l.jsx)(w,{content:"3",labelHead:"Verify ID"})]}),Object(l.jsx)(i.a,{basename:"https://goyal-dushi.github.io/X-Coins-Forms",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:p}),Object(l.jsx)(o.a,{exact:!0,path:"/upd",component:O}),Object(l.jsx)(o.a,{exact:!0,path:"/personalDetails",component:v}),Object(l.jsx)(o.a,{exact:!0,path:"/sms",component:C}),Object(l.jsx)(o.a,{exact:!0,path:"/verifyID",component:S})]})})]})};n(52);a.a.render(Object(l.jsx)(A,{}),document.getElementById("root"))}],[[53,1,2]]]);
//# sourceMappingURL=main.927bd3d5.chunk.js.map