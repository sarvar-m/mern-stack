import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Activate from "./auth/Activate";
import Private from "./core/Private";
import PrivateRoute from "./auth/PrivateRoute";
import Admin from "./core/Admin";
import AdminRoute from "./auth/AdminRoute";
import Forgot from "./auth/Forgot";
import Reset from "./auth/Reset";
import Dairy from "./auth/Dairy";
import Events from "./auth/Events";
import Gallery from "./auth/Gallery";
import Invite from "./auth/Invite";
import Home from "./auth/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/dairy" component={Dairy} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/invite" component={Invite} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/auth/activate/:token" component={Activate} />
        <PrivateRoute exact path="/private" component={Private} />
        <AdminRoute exact path="/admin" component={Admin} />
        <Route exact path="/auth/password/forgot" component={Forgot} />
        <Route exact path="/auth/password/reset/:token" component={Reset} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
