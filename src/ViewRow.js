import React from 'react';
import swal from 'sweetalert';
import "./App.css";
import { Input } from 'mdbreact';
import { Link } from 'react-router-dom';
import Empview from './Empview';
import { Table, TableBody, TableHead} from 'mdbreact';
import PouchDB from 'pouchdb';


var db = PouchDB('dataB1');
var docs="";
var employees = {};
var  count;

class ViewRow extends React.Component {




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

    //console.log('hello ')
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    let rows = [];
    productsAsArray.forEach((product) => {
     if (product._id.indexOf(this.props.filterText) === -1)
     {
     return;
    } 
    rows.push(
        <Empview product={product} key={product.id} onDestroy={this.handleDestroy} />
      );
     // console.log(rows)
    });

    return (
     
      <div>

      
      <header1><h>List of Employees Details from PouchDB</h></header1>
        <nav className="navbar">
      <h3><Link to="/emp/data">Editpage</Link></h3>
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

      <div  className = 'table'>
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



{/* employee list starts handleDestroy */}

      {/* <div className = 'viewlist'>

      <header1><h>List of Employees Details</h></header1>
        <div className = 'table'>
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
           {Object.keys(employees).map((k, v) => {
            return(
              <tr>
        <td>{employees[v]._id}</td>
        <td>{employees[v].name}</td>
        <td>{employees[v].designation}</td>
        <td>{employees[v].address}</td>
        </tr>
            )
           })
           }
           </TableBody>
     </Table>
         </div>
         </div> */}
         </div> 
        </div>
    );
  }
}

export default ViewRow;