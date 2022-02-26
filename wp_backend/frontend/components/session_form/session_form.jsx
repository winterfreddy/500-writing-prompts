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
                    <div className='login-form-sub-box'>
                        <label>Username</label>
                        <input type="text"
                            className="login-input"
                            value={state.username}
                            placeholder="Username"
                            onChange={handleChange('username')} />
                    </div>
                    <div className='login-form-sub-box'>
                        <label>Email Address</label>
                        <input type="text"
                            className="login-input"
                            value={state.email}
                            placeholder="Email"
                            onChange={handleChange('email')} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className='login-form-sub-box'>
                    <label>Email Address</label>
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

    return (
        <div className="login-form-container">
            <img className="login-form-image" src="images/undraw_Authentication.png" alt="woman standing with a phone authenticating her credentials"/>
            <form onSubmit={handleSubmit} className="login-form-box">
                <label className="login-title">500+ Writing Prompts</label>
                <div className="login-form">
                    {renderUserEmail()}
                    <div className='login-form-sub-box'>
                        <label>Password</label>
                        <input type="password"
                            className="login-input"
                            value={state.password}
                            placeholder="Password"
                            onChange={handleChange('password')} />
                    </div>
                    <button className="session-submit" type="submit" value={props.formType} >{props.formType}</button>
                </div>
            </form>
            {/* {renderRedirectButton()} */}
        </div>
    )
}

export default SessionForm;