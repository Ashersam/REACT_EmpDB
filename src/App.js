import React, { Fragment } from 'react';
import "./App.css";
import DataBase from './DataBase';
import Login from './Login';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ThankYou from './ThankYou';




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
       <Route exact path="/" component={Login} />
        <Route exact path="/thankyou" component={ThankYou} />
      <Route exact path= "/emp" component={DataBase} />
      </div>
      </BrowserRouter>
    );
  }
} 

export default App;