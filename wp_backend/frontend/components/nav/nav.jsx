import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const newSession = () => {
        return (
            <div className='navbar'>
                <label>500+ Writing Prompts</label>
            </div>
        );
    };
    
    const currSession = () => {
        return (
            <div className='navbar'>
                <label>500+ Writing Prompts</label>
            </div>
        );
    };

    return props.currentUser ? currSession() : newSession();
}

export default Nav;