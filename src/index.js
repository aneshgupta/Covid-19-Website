import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./components/App";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./assets/corona_icon.png";

const App = function () {
  return (
    <div className="ui container comments">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Covid 19
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Hospital Dashboards" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hospitalBeds">
                Hospitals & Beds
              </NavDropdown.Item>
              <NavDropdown.Item href="/medicalClg">
                Medical Colleges & Beds
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/notification">Notifications</Nav.Link>
            <Nav.Link href="/contact">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MainApp />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
