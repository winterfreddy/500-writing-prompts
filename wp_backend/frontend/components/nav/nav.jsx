import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const newSession = () => {
        return (
            <div>
                <label>You're not signed in!</label>
            </div>
        );
    };
    
    const currSession = () => {
        return (
            <div>
                <label>You're signed in!</label>
            </div>
        );
    };

    return props.currentUser ? currSession() : newSession();
}

export default Nav;