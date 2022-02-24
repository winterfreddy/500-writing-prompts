import React from "react";
import NavContainer from "./nav/nav_container";
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashPage from "./splash";

const App = () => (
    <div>
        <header>
            <NavContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        
        <Route exact path="/" component={SplashPage}/>
    </div>
);

export default App;