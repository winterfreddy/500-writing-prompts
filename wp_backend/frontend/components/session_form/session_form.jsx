import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SessionForm = (props) => {
    const [state, setState] = useState({ username: "", email: "", password: "" });

    function handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, state);
        props.processForm(user);
    }

    function handleChange(payload) {
        return (e) => setState({...state, [payload]: e.currentTarget.value });
    }

    function renderUserEmail() {
        if(props.formType === 'signup') {
            return (
                <div>
                    <input type="text"
                        className="login-input"
                        value={state.username}
                        placeholder="Username"
                        onChange={handleChange('username')} />
                    <input type="text"
                        className="login-input"
                        value={state.email}
                        placeholder="Email"
                        onChange={handleChange('email')} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <input type="text"
                        className="login-input"
                        value={state.email}
                        placeholder="Email"
                        onChange={handleChange('email')} />
                </div>
            )
        }
    }

    function renderRedirectButton() {
        if(props.formType === 'signup') {
            return (
                <Link to="/login" className="login-button">Log in</Link>
                )
        }
        else {
            return (
                <Link to="/signup" className="signup-button">Sign up</Link>
            )
        }
    }

    // console.log(props, state);
    return (
        <div className="login-form-container">
            {renderRedirectButton()}
            <form onSubmit={handleSubmit} className="login-form-box">
                <label className="title">500wp</label>
                <div className="login-form">
                    {renderUserEmail()}
                    <input type="password"
                        className="login-input"
                        value={state.password}
                        placeholder="Password"
                        onChange={handleChange('password')} />
                    <button className="session-submit" type="submit" value={props.formType} >{props.formType}</button>
                </div>
            </form>
        </div>
    )
}

export default SessionForm;