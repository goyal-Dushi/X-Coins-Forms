(this["webpackJsonpx-coins-forms"]=this["webpackJsonpx-coins-forms"]||[]).push([[0],{108:function(e,t,c){},111:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},218:function(e,t,c){},219:function(e,t,c){},221:function(e,t,c){},222:function(e,t,c){},223:function(e,t,c){},224:function(e,t,c){},225:function(e,t,c){},226:function(e,t,c){},227:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(14),s=c.n(n),i=(c(108),c(99)),o=c(11),a=c(7),l=c(4),d=(c(111),c(1));var m=function(e){return Object(d.jsxs)("div",{style:{height:e.height},className:"warning-rect",children:[Object(d.jsx)("img",{className:"warning-icon",src:e.imgSrc,alt:e.imgSrc}),e.content]})},u=c.p+"static/media/clock-icon.e0d15e0f.svg";c(113);var j=function(e){return Object(d.jsx)("label",{htmlFor:e.labelFor,children:e.title})};c(114);var b=function(e){return Object(d.jsx)("button",{className:"green-btn",type:e.typeFor,children:e.name})},p=(c(43),c(100)),h=c(8);var O=function(){var e=Object(o.f)(),t=Object(r.useState)("correct-input"),c=Object(a.a)(t,2),n=c[0],s=c[1],i=Object(r.useState)("correct-input"),O=Object(a.a)(i,2),x=O[0],N=O[1],v=Object(r.useState)("correct-input"),f=Object(a.a)(v,2),y=f[0],g=f[1],S=Object(r.useState)("correct-input"),C=Object(a.a)(S,2),F=C[0],P=C[1];return Object(d.jsx)(l.c,{initialValues:{firstName:"",lastName:"",email:"",password:"",terms:!1},validationSchema:h.d({firstName:h.e().max(12,"Must be 12 characters or less").required("Required Field"),lastName:h.e().max(12,"Must be 12 characters or less").required("Required Field"),email:h.e().email("Invalid email ID provided").required("Required Field"),password:h.e().max(15,"Must be of max 15 characters").min(4,"Cannot be less than 4 characters").required("Required Field").matches("(?=.*[A-Z])","Must contain atlease one UPPERCASE char").matches("(?=.*[a-z])","Must contain atleast one lowercase char").matches("(?=.*[-+_!@#$%^&*., ?])","Must contain atleast one special character"),terms:h.a().oneOf([!0],"Must accept the terms and conditions first")}),onSubmit:function(t){console.log("Form is successfully submitted :"+t.firstName+" "+t.lastName),e.push("/upd")},children:function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{imgSrc:u,altImg:"Clock-Icon",height:72,content:"Once submitted,your profile cannot be changed.  Please ensure that your information is correct."}),Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{title:"First name*",labelFor:"firstName"}),Object(d.jsx)(l.b,{autoComplete:"off",name:"firstName",type:"text",placeholder:"Enter First Name",className:n}),e.errors.firstName&&e.touched.firstName?s("error-input"):s("correct-input"),Object(d.jsx)(l.a,{style:{display:"block"},name:"firstName",className:"error-msg",component:"div"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"#lastName",title:"Last name*"}),Object(d.jsx)(l.b,{autoComplete:"off",name:"lastName",type:"text",placeholder:"Enter Last Name",className:x}),e.errors.lastName&&e.touched.lastName?N("error-input"):N("correct-input"),Object(d.jsx)(l.a,{name:"lastName",className:"error-msg",component:"div"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{title:"Email address*",labelFor:"#email"}),Object(d.jsx)(l.b,{autoComplete:"off",type:"text",name:"email",placeholder:"Enter Email ID",className:y}),e.errors.email&&e.touched.email?g("error-input"):g("correct-input"),Object(d.jsx)(l.a,{name:"email",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"password",title:"Create Password"}),Object(d.jsx)(l.b,{name:"password",placeholder:"Enter Password",type:"password",className:F}),e.errors.password&&e.touched.password?P("error-input"):P("correct-input"),Object(d.jsx)(l.a,{name:"password",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{className:"conditional-container",style:{height:130},children:[Object(d.jsxs)("div",{className:"conditional-box",children:[Object(d.jsx)(l.b,{type:"checkbox",name:"terms"}),Object(d.jsxs)("p",{children:["By clicking \xabContinue\xbb you agree to our ",Object(d.jsx)("a",{href:"www.google.com",className:"links",children:"Terms"})," ,",Object(d.jsx)("a",{href:"www.google.com",className:"links",children:" Cookies Policy "})," and",Object(d.jsx)("a",{href:"www.google.com",className:"links",children:" Privacy Policy "}),". You may receive email and SMS notifications from us and can opt out at any time."]})]}),Object(d.jsx)(l.a,{name:"terms",component:"div",className:"error-msg"})]}),Object(d.jsx)(p.a,{sitekey:"6LeOrPcaAAAAAOor_6HpXLDKipTY0FknggQaXsWM"}),Object(d.jsx)("div",{style:{marginTop:40},children:Object(d.jsx)(b,{name:"CONTINUE",typeFor:"submit"})})]})]})}})},x=(c(218),function(e){var t={};return e.pincode1?(e.pincode1>9||e.pincode1<0)&&(t.pincode1="Field 1: only single digit poitive value accepted"):t.pincode1="Required field 1",e.pincode2?(e.pincode2>9||e.pincode2<0)&&(t.pincode2="Field 2: only single digit positive value accepted"):t.pincode2="Required field 2",e.pincode3?(e.pincode3>9||e.pincode3<0)&&(t.pincode3="Field 3: only single digit positive value accepted"):t.pincode3="Required field 3",e.pincode4?(e.pincode4>9||e.pincode4<0)&&(t.pincode4="Field 4: only single digit positive value accepted"):t.pincode4="Required field 4",t});var N=function(){var e=Object(o.f)(),t=Object(l.d)({initialValues:{pincode1:null,pincode2:null,pincode3:null,pincode4:null},validate:x,onSubmit:function(t){console.log("Pincode : "+t.pincode1+t.pincode2+t.pincode3+t.pincode4),e.push("/personalDetails")}});return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{height:72,imgSrc:u,content:"We've sent your email address a code. Please input the 4 digit code here to verify your email address"}),Object(d.jsxs)("form",{className:"form-UPD",action:"#",onSubmit:t.handleSubmit,children:[Object(d.jsx)("div",{className:"label-container",children:Object(d.jsx)(j,{labelFor:"pin-container",title:"4 digit code"})}),Object(d.jsxs)("div",{className:"pin-container",children:[Object(d.jsx)("input",{type:"number",name:"pincode1",id:"pincode1",min:0,pattern:"/[^0-9]|^0+(?!$)/g",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.pincode1}),Object(d.jsx)("input",{type:"number",name:"pincode2",id:"pincode2",min:0,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.pincode2}),Object(d.jsx)("input",{type:"number",name:"pincode3",id:"pincode3",min:0,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.pincode3}),Object(d.jsx)("input",{type:"number",name:"pincode4",id:"pincode4",min:0,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.pincode4})]}),t.touched.pincode1&&t.errors.pincode1?Object(d.jsxs)("div",{className:"error-msg",children:[" ",t.errors.pincode1," "]}):null,t.touched.pincode2&&t.errors.pincode2?Object(d.jsxs)("div",{className:"error-msg",children:[" ",t.errors.pincode2," "]}):null,t.touched.pincode3&&t.errors.pincode3?Object(d.jsxs)("div",{className:"error-msg",children:[" ",t.errors.pincode3," "]}):null,t.touched.pincode4&&t.errors.pincode4?Object(d.jsxs)("div",{className:"error-msg",children:[" ",t.errors.pincode4," "]}):null,Object(d.jsx)("div",{className:"form1UPD-submit-btn",children:Object(d.jsx)(b,{typeFor:"submit",name:"RESEND CODE"})})]})]})},v=(c(219),c(70)),f=c(259),y=c(258);var g=function(){var e=Object(o.f)(),t=Object(r.useState)("correct-input"),c=Object(a.a)(t,2),n=c[0],s=c[1],i=Object(r.useState)("correct-input"),m=Object(a.a)(i,2),u=m[0],p=m[1],O=Object(r.useState)("correct-input"),x=Object(a.a)(O,2),N=x[0],g=x[1],S=Object(r.useState)("correct-input"),C=Object(a.a)(S,2),F=C[0],P=C[1],w=Object(r.useState)("correct-input"),q=Object(a.a)(w,2),D=q[0],k=q[1],A=Object(r.useState)("correct-input"),R=Object(a.a)(A,2),E=R[0],I=R[1],L=Object(r.useState)("correct-input"),M=Object(a.a)(L,2),B=M[0],U=M[1],T=Object(r.useState)("correct-input"),z=Object(a.a)(T,2),V=z[0],W=z[1];return Object(d.jsx)(l.c,{initialValues:{countryName:"",firstAddress:"",lastAddress:"",stateName:"",cityName:"",zipcode:"",countryCode:"",phoneNo:""},validationSchema:h.d({countryName:h.e().required("Required Country Name"),firstAddress:h.e().required("Required First Address Field"),lastAddress:h.e().required("Required Second Address Field"),stateName:h.e().required("Required State Name"),cityName:h.e().required("Required City name"),zipcode:h.c().max(999999,"Max lenght cannot exceed 6 digits").required("Required zipcode"),countryCode:h.e().required("Required Country code"),phoneNo:h.c().required("Required Phone number").positive("Negative Number").max(9999999999,"Invalid Number").min(1e9,"Invalid Number")}),onSubmit:function(t){console.log("Country Name : "+t.countryName+" Country Code : "+t.countryCode+" State Name : "+t.stateName+" State Code : "+t.zipcode+" Phone No. : "+t.phoneNo),e.push("/sms")},children:function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"countryName",title:"Country *"}),Object(d.jsx)(l.b,{name:"countryName",children:function(e){var t=e.meta;return Object(d.jsxs)("div",{children:[Object(d.jsxs)(y.a,{defaultValue:"",className:n,children:[Object(d.jsxs)(f.a,{value:"IN",children:[" ",Object(d.jsx)(v.a.IN,{className:"icon"})," IN "]}),Object(d.jsxs)(f.a,{value:"US",children:[" ",Object(d.jsx)(v.a.US,{className:"icon"})," US "]})]}),t.touched&&t.error?s("error-input"):U("correct-input")]})}}),Object(d.jsx)(l.a,{name:"countryName",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"firstAddress",title:"First line address *"}),Object(d.jsx)(l.b,{className:u,type:"text",placeholder:"First Address Line",name:"firstAddress"}),e.errors.firstAddress&&e.touched.firstAddress?p("error-input"):p("correct-input"),Object(d.jsx)(l.a,{name:"firstAddress",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"lastAddress",title:"Second line address *"}),Object(d.jsx)(l.b,{className:N,type:"text",name:"lastAddress",placeholder:"Second Address Line"}),e.errors.lastAddress&&e.touched.lastAddress?g("error-input"):g("correct-input"),Object(d.jsx)(l.a,{name:"lastAddress",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsxs)("div",{style:{maxWidth:267},className:"input-container",children:[Object(d.jsx)(j,{labelFor:"state",title:"State/Province *"}),Object(d.jsx)(l.b,{style:{width:267},className:F,name:"stateName",placeholder:"State Name",type:"text"}),e.errors.stateName&&e.touched.stateName?P("error-input"):P("correct-input"),Object(d.jsx)(l.a,{name:"stateName",className:"error-msg",component:"div"})]}),Object(d.jsxs)("div",{className:"input-container",style:{maxWidth:267},children:[Object(d.jsx)(j,{labelFor:"cityName",title:"City/Town *"}),Object(d.jsx)(l.b,{style:{width:267},name:"cityName",className:D,placeholder:"City Name",type:"text"}),e.errors.cityName&&e.touched.cityName?k("error-input"):k("correct-input"),Object(d.jsx)(l.a,{name:"cityName",component:"div",className:"error-msg"})]})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"zipcode",title:"Zip code / Post code*"}),Object(d.jsx)(l.b,{name:"zipcode",type:"number",className:E,placeholder:"Zipcode"}),e.errors.zipcode&&e.touched.zipcode?I("error-input"):I("correct-input"),Object(d.jsx)(l.a,{name:"zipcode",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsxs)("div",{className:"input-container",style:{maxWidth:170},children:[Object(d.jsx)(j,{labelFor:"countryCode",title:"Country code *"}),Object(d.jsxs)(l.b,{style:{width:170},as:"select",className:B,name:"countryCode",type:"text",children:[Object(d.jsx)("option",{value:91,children:"IN"}),Object(d.jsx)("option",{value:1,children:"US"})]}),e.errors.countryCode&&e.touched.countryCode?U("error-input"):U("correct-input"),Object(d.jsx)(l.a,{name:"countryCode",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{style:{maxWidth:364},className:"input-container",children:[Object(d.jsx)(j,{labelFor:"phoneNo",title:"Phone number *"}),Object(d.jsx)(l.b,{style:{width:364},type:"tel",className:V,placeholder:"Enter Phone number",name:"phoneNo"}),e.errors.phoneNo&&e.touched.phoneNo?W("error-input"):W("correct-input"),Object(d.jsx)(l.a,{name:"phoneNo",component:"div",className:"error-msg"})]})]}),Object(d.jsx)("div",{className:"button",children:Object(d.jsx)(b,{typeFor:"submit",name:"CONTINUE"})})]})}})};c(221),c(222);var S=function(e){return Object(d.jsx)("button",{className:"blue-btn",type:e.type,style:{width:e.btnWidth},children:e.title})};var C=function(e){var t=Object(r.useState)("correct-input"),c=Object(a.a)(t,2),n=c[0],s=c[1],i=Object(r.useState)("correct-input"),o=Object(a.a)(i,2),m=o[0],u=o[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.c,{initialValues:{countryCode:"",phoneNum:""},validationSchema:h.d({countryCode:h.c().required("Select country code"),phoneNum:h.c().required("Required Field").max(9999999999,"Invalid Number").min(1e9,"Invalid Number")}),onSubmit:function(e){console.log("Country Code : "+e.countryCode+" Phone : "+e.phoneNum)},children:function(t){return Object(d.jsx)("form",{onSubmit:t.handleSubmit,children:Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"countryCode",title:"Country code *"}),Object(d.jsxs)(l.b,{style:{width:170},name:"countryCode",className:n,type:"number",children:[Object(d.jsx)("option",{value:91,children:"IN"}),Object(d.jsx)("option",{value:1,children:"US"})]}),t.errors.countryCode&&t.touched.countryCode?s("error-input"):s("correct-input"),Object(d.jsx)(l.a,{name:"countryCode",className:"error-msg",component:"div"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"phoneNum",title:"Phone number *"}),Object(d.jsx)(l.b,{name:"phoneNum",style:{width:199},className:m}),t.errors.phoneNum&&t.touched.phoneNum?u("error-input"):u("correct-input"),Object(d.jsx)(l.a,{name:"phoneNum",className:"error-msg",component:"div"})]}),Object(d.jsx)("div",{style:{marginLeft:19,marginTop:45},onClick:function(){return e.function(!1)},children:Object(d.jsx)(S,{btnWidth:146,type:"submit",title:"SEND CODE"})})]})})}})})};var F=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)("correct-input"),i=Object(a.a)(s,2),m=i[0],u=i[1],p=Object(o.f)();return Object(d.jsxs)(d.Fragment,{children:[c?Object(d.jsx)(C,{function:n}):Object(d.jsx)("div",{className:"info-container",children:Object(d.jsxs)("div",{children:["Please enter seven digit code we just sent to your number",Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("span",{children:"+202-502-5899"}),Object(d.jsx)("div",{onClick:function(){return n(!0)},className:"links",children:" Change "})]})]})}),Object(d.jsx)(l.c,{initialValues:{smsNumber:""},validationSchema:h.d({smsNumber:h.c().required("Required SMS Code").positive("Code Invalid").min(1e5,"Code must be of 6 digits").max(999999,"Code must be of 6 digits")}),onSubmit:function(e){console.log("SMS CODE IS : "+e.smsNumber),p.push("/verifyID")},children:function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"smsNumber",title:"SMS Code*"}),Object(d.jsx)(l.b,{name:"smsNumber",plaholder:"Enter SMS code",type:"number",className:m}),e.errors.smsNumber&&e.touched.smsNumber?u("error-input"):u("correct-input"),Object(d.jsx)(l.a,{name:"smsNumber",component:"div",className:"error-msg"})]}),Object(d.jsx)("div",{style:{marginTop:18},className:"conditional-box",children:Object(d.jsxs)("p",{children:["You have 3 attempts left.Didn't receive the SMS.",Object(d.jsx)("a",{href:"www.google.com",className:"links",children:" Resend SMS Code "})]})}),Object(d.jsx)("div",{style:{marginTop:34},children:Object(d.jsx)(b,{typeFor:"submit",name:"VERIFY PHONE NUMBER"})})]})}})]})},P=c.p+"static/media/attention-icon.65235be9.svg";c(223);var w=function(){var e=Object(r.useState)("correct-input"),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)("correct-input"),i=Object(a.a)(s,2),o=i[0],u=i[1],p=Object(r.useState)("correct-input"),O=Object(a.a)(p,2),x=O[0],N=O[1],v=Object(r.useState)("correct-input"),f=Object(a.a)(v,2),y=f[0],g=f[1],S=Object(r.useState)("correct-input"),C=Object(a.a)(S,2),F=C[0],w=C[1],q=Object(r.useState)("correct-input"),D=Object(a.a)(q,2),k=D[0],A=D[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{height:116,imgSrc:P,content:"Follow instructions to start buying cryptocurrencies via Xcoins: 1) Upload the front and back of your government issued ID 2) Please take a selfie holding your identity document and a note with today\u2019s date and \xabXcoins\xbb written on it"}),Object(d.jsx)(l.c,{initialValues:{dob:"",method:"",frontPhoto:"",backPhoto:"",selfiePhoto:"",DLnumber:"",terms:!1},validationSchema:h.d({dob:h.b().required("Required DOB").max(new Date,"DOB cannot be in future").typeError("Birth Date has to be a valid date"),method:h.e().required("Method Required"),DLnumber:h.c().required("DL number is required"),terms:h.a().oneOf([!0],"Please accept the terms & conditions"),frontPhoto:h.e().required("File Required"),backPhoto:h.e().required("File Required"),selfiePhoto:h.e().required("File Required")}),onSubmit:function(e){console.log("DOB :"+e.dob+" DLno. :"+e.DLnumber)},children:function(e){return Object(d.jsxs)("form",{action:"#",onSubmit:e.handleSubmit,children:[Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"dob",title:"Date of birth *"}),Object(d.jsx)(l.b,{name:"dob",type:"date",placeholder:"Enter DOB",className:c}),e.errors.dob&&e.touched.dob?n("error-input"):n("correct-input"),Object(d.jsx)(l.a,{name:"dob",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"method",title:"Choose method *"}),Object(d.jsxs)(l.b,{as:"select",name:"method",placeholder:"Enter Method",className:o,type:"text",children:[Object(d.jsx)("option",{value:"DL",children:"Driving Licence"}),Object(d.jsx)("option",{value:"LL",children:"Learning Licence"}),Object(d.jsx)("option",{value:"Passport",children:"Passport"}),Object(d.jsx)("option",{value:"Aadhar",children:"Aadhar Card"})]}),e.errors.method&&e.touched.method?u("error-input"):u("correct-input"),Object(d.jsx)(l.a,{name:"method",className:"error-msg",component:"div"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"frontPhoto",title:"Driving licence front photo *"}),Object(d.jsx)(l.b,{name:"forntPhoto",type:"file",accept:".jpg, .png, .pdf",className:x}),e.errors.frontPhoto&&e.touched.frontPhoto?N("error-input"):N("correct-input"),Object(d.jsx)(l.a,{name:"frontPhoto",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"backPhoto",title:"Driving licence back photo *"}),Object(d.jsx)(l.b,{name:"backPhoto",type:"file",accept:".jpg, .png, .pdf",className:y}),e.errors.backPhoto&&e.touched.backPhoto?g("error-input"):g("correct-input"),Object(d.jsx)(l.a,{name:"backPhoto",className:"error-msg",component:"div"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"selfiePhoto",title:"Selfie holding ID doc and note *"}),Object(d.jsx)(l.b,{name:"selfiePhoto",type:"file",accept:".jpg, .png, .pdf",className:F}),e.errors.selfiePhoto&&e.touched.selfiePhoto?w("error-input"):w("correct-input"),Object(d.jsx)(l.a,{name:"selfiePhoto",component:"div",className:"error-msg"})]}),Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)(j,{labelFor:"DLnumber",title:"Driving licence number *"}),Object(d.jsx)(l.b,{name:"DLnumber",type:"number",placeholder:"Enter DL Number",className:k}),e.errors.DLnumber&&e.touched.DLnumber?A("error-input"):A("correct-input"),Object(d.jsx)(l.a,{name:"DLnumber",className:"error-msg",component:"div"})]}),Object(d.jsxs)("div",{className:"conditional-container",style:{height:70},children:[Object(d.jsxs)("div",{className:"conditional-box",children:[Object(d.jsx)(l.b,{name:"terms",type:"checkbox"}),Object(d.jsxs)("p",{children:["Please accept",Object(d.jsx)("a",{href:"www.google.com",className:"links",children:" Terms of service "}),"and",Object(d.jsx)("a",{href:"www.google.com",className:"links",children:" Privacy Policy "})]})]}),Object(d.jsx)(l.a,{name:"terms",className:"error-msg",component:"div"})]}),Object(d.jsx)("div",{style:{marginTop:29},children:Object(d.jsx)(b,{typeFor:"submit",name:"UPLOAD FILES"})})]})}})]})};c(224);var q=function(e){return Object(d.jsx)("h1",{className:"form-head",children:e.title})};c(225);var D=function(e){return Object(d.jsxs)("div",{className:"circle-wrapper",children:[Object(d.jsx)("div",{className:"circle",children:e.content}),Object(d.jsx)(j,{labelFor:e.content,title:e.labelHead,style:{fontWeight:"bold"}})]})};var k=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(q,{title:"Create account"}),Object(d.jsxs)("div",{className:"circle-container",children:[Object(d.jsx)(D,{content:"1",labelHead:"Account setup"}),Object(d.jsx)("hr",{}),Object(d.jsx)(D,{content:"2",labelHead:"Personal details"}),Object(d.jsx)("hr",{}),Object(d.jsx)(D,{content:"3",labelHead:"Verify ID"})]}),Object(d.jsx)(i.a,{basename:"https://goyal-dushi.github.io/X-Coins-Forms",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:O}),Object(d.jsx)(o.a,{exact:!0,path:"/upd",component:N}),Object(d.jsx)(o.a,{exact:!0,path:"/personalDetails",component:g}),Object(d.jsx)(o.a,{exact:!0,path:"/sms",component:F}),Object(d.jsx)(o.a,{exact:!0,path:"/verifyID",component:w})]})})]})};c(226);s.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))},43:function(e,t,c){}},[[227,1,2]]]);
//# sourceMappingURL=main.426d0db6.chunk.js.map