import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";


class signout extends React.Component  {

  signin = () => {
    this.props.history.replace(`/`);
    window.location.reload();
  }
  render() {
    return(
<div className="jumbotron text-xs-center">
  <h1 className="display-3">Thank You! You're succesfully logged out...:( Visit-Again..:) </h1>

   <input type="submit" className="button" onClick={this.signin} value = "Sign-In"/>

</div>
    );
  }
};

export default signout;