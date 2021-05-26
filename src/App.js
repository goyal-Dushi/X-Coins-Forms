import React from 'react';
import "./sass/app.scss";
// import Form1 from "./pages/Form-1";
// import Form1_UPD from "./pages/Form-1-UPD";
// import Form2 from "./pages/Form-2";
import Form3 from "./pages/Form-3";
import FromHeading from "./components/FormHeading";
import NavCircle from "./components/NavCircle"

function App() {
  return (
    <div className="App" >
      <FromHeading title="Create account" />
        
      <div className="circle-container" >
        <NavCircle content="1" labelHead="Account setup" />
        <hr />
        <NavCircle content="2" labelHead="Personal details" />
        <hr />
        <NavCircle content="3" labelHead="Verify ID" />
      </div>
      <Form3 />
    </div>
  );
}

export default App;
