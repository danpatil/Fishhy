import React from 'react';
import PropTypes from 'prop-types';

const Login = (props ) => (
    <nav className="inventory">
        <h2>Inventory Login</h2>
        <p className="signIn">Sign-In To Manage Your Store</p>
        <button onClick={() =>  props.authenticate("Github")} id="github loginbtn" >Log In With Github</button>
        <button onClick={() => props.authenticate("Facebook")} id="facebook loginbtn" >Log In With Facebook</button>
    </nav>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;