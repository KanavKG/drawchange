// NPM Packages
import PropTypes from "prop-types";
import React from "react";
import { Switch, Route } from "react-router-dom";

// Local Imports
import VolunteerDashboard from '../VolunteerDashboard';
import EventContainer from "../EventContainer";

export const VolunteerContainer = () => (
  <Switch>
    <Route path={"/events/:id"} component={EventContainer} />
    <Route path={"/events"} component={EventContainer} />
    <Route path={"/"} exact component={VolunteerDashboard} />
  </Switch>
);