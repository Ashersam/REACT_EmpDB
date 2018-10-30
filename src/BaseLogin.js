import React from 'react';
import PropTypes from 'prop-types';

const BaseLogin = (props) => (
    <nav className='Login'>
        <header>DATABASE Login</header>
        <p>Sign in to Manage the EMP_DATA</p>
        <button 
        className='facebook' 
        onClick={() => props.authenticate("Facebook")}>
            LOGIN IN Using Facebook
        </button>
    </nav>
);

BaseLogin.propTypes = {
   authenticate : PropTypes.func.isRequired
};

export default BaseLogin;