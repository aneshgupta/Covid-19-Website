import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Notification from "./Notification/Notification";
import Dashboard from "./Dashboard/DashBoard";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import HospitalBeds from "./HospitalBeds/HospitalBeds";
import MedicalClg from "./MedicalClg/MedicalClg";
const App = function () {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/notification" component={Notification} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/hospitalBeds" exact component={HospitalBeds} />
          <Route path="/medicalClg" exact component={MedicalClg} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
