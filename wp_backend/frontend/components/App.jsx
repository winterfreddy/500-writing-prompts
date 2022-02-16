import React from "react";
import NavContainer from "./nav/nav_container";
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <NavContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        
        <Route exact path="/" render={() => 
            <div>
                <label>500+ Writing Prompts</label>
                <div>
                    <label>Pick a prompt</label>
                    <label>Write a response</label>
                    <label>Share with the world</label>
                </div>
            </div>
        }/>
    </div>
);

export default App;