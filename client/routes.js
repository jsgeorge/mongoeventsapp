import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/homepage";
import SignIn from "./components/signin";
import SignupPage from "./components/signup";
import EventsPage from "./components/events";
import AddEventPage from "./components/events/new";
import requireAuth from "./utils/requireAuth";

const Routes = () => {
  return (
    <Switch>
      <Route path="/events/new" component={requireAuth(AddEventPage)} />
      <Route path="/events" exact component={requireAuth(EventsPage)} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};

export default Routes;
