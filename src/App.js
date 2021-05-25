import React from 'react';
import Btn from "./components/SubmitBtn";
import NavCircle from "./components/NavCircle";
import Label from "./components/Label";

function App() {
  return (
    <div className="App">
      <h1>Hello there</h1>
      <Btn name="SUBMIT" />
      <NavCircle content="1" />
      <Label title="Label" />
    </div>
  );
}

export default App;
