import React from 'react';
import { Link } from 'react-router-dom';


class signout extends React.Component  {
  render() {
    return(
<div className="jumbotron text-xs-center">
  <h1 className="display-3">Thank You! You're succesfully logged out...!</h1>

   <Link to="/">sign-in</Link>

</div>
    );
  }
};

export default signout;