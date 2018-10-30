import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import NotFound from './NotFound';
import EmpForm from './EmpForm';
import EmpTable from './EmpTable';
import DataBase from './DataBase';


const Router = () => ( 
    <BrowserRouter>
     <Switch>
         <Route exact="/" component={Login} />
     </Switch>

    </BrowserRouter>
        

);

export default Router;