import React, { createContext, useState } from "react";
import "./sass/app.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Form1 from "./pages/Form-1";
import Form1_UPD from "./pages/Form-1-UPD";
import Form2 from "./pages/Form-2";
import Form3 from "./pages/Form-3";
import Form5 from "./pages/Form-5";
import FromHeading from "./components/FormHeading";
import NavCircle from "./components/NavCircle";

export const circleContext = createContext();

function App() {
  const [active, setActive] = useState({
    circle1: true,
    circle2: false,
    circle3: false,
  });

  return (
    <div className='App'>
      <FromHeading title='Create account' />

      <div className='circle-container'>
        <NavCircle
          status={active.circle1}
          content='1'
          labelHead='Account setup'
        />
        <hr />
        <NavCircle
          status={active.circle2}
          content='2'
          labelHead='Personal details'
        />
        <hr />
        <NavCircle status={active.circle3} content='3' labelHead='Verify ID' />
      </div>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <circleContext.Provider value={{ setter: setActive }}>
            <Route exact path='/' component={Form1} />
            <Route exact path='/upd' component={Form1_UPD} />
            <Route exact path='/personalDetails' component={Form2} />
            <Route exact path='/sms' component={Form3} />
            <Route exact path='/verifyID' component={Form5} />
          </circleContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
