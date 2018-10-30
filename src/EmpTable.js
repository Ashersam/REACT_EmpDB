import React from 'react';
import TableRow from './TableRow.js';
import "./App.css";
// import {FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Input } from 'mdbreact';
import { BrowserRouter, Route } from 'react-router-dom';

import { Table, TableBody, TableHead} from 'mdbreact';
// import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
// import BaseLogin from './BaseLogin';

// const RESET_VALUES = {name:'', Designation:'', Address:''};



class EmpTable extends React.Component {


      
      //filter and table starts here
  handleChange = (e) =>
   {
    const value = e.target.value;
    const name = e.target.name;
  

  this.props.onFilter({
    [name]: value
  });
}

  handleDestroy = (id) => {
    this.props.onDestroy(id);
  }


  
  render() {
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    let rows = [];
    let count = this.props.products1;
    productsAsArray.forEach((product) => {
     if (product.uni.indexOf(this.props.filterText) === -1)
     {
     return;
    } 
    rows.push(
        <TableRow product={product} key={product.id} onDestroy={this.handleDestroy} />
      );
    });

    var style = {};
    count=1;
if(count===0) {
  style.display = 'none'
}



    return (
     
      <div>
        <nav className="navbar">
      <h2><Link to="/emp/data">Editpage</Link></h2>
      </nav>
      <div className="filter">
 
        <div className='Form3'>
          <form>
         <Input label="Search ID"
        icon="user"
        type="text"
        value= {this.props.filterText}
        onChange = {this.handleChange}
        name="filterText"
        required
        />
          </form>
          </div>


      <div style={style} className = 'table'>
       <Table hover>
      <TableHead>
          <tr>
        <th>EMPID</th>
        <th>NAME</th>
        <th>DESIGNA</th>
        <th>ADDRESS</th>
          </tr>
          </TableHead>
          <TableBody>
          {rows}
          </TableBody>
    </Table>
        </div>
        </div>
        </div>
       
    );
  }
  }

export default EmpTable;