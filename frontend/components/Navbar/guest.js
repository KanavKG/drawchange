// NPM Packages
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/lib/Navbar";
//import './assets/stylesheets/base.scss';

export const GuestNavbar = () => (
  <Navbar collapseOnSelect className="navBar guest">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img style={{width:"200px"}} src="http://drawchange.org/wp-content/uploads/2014/02/LOGO_dc.png"></img></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);

