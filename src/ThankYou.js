import React from 'react';
import { Link } from 'react-router-dom';
class ThankYou extends React.Component  {
  render() {
    return(
<div className="jumbotron text-xs-center">
  <h1 className="display-3">Thank You! You're Good To Goooo...!</h1>
  <p className="lead"><strong>Please login with ur username and password to check DataBase</strong> for further instructions on how to complete your account setup.</p>
  <p>
    Having trouble? <Link to="/">Sign-in</Link>
  </p>
</div>
    );
  }
};

export default ThankYou;