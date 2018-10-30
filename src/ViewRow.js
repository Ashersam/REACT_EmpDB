import React from 'react';
import swal from 'sweetalert';
import "./App.css";
import { Input } from 'mdbreact';
import Empview from './Empview';
import { Table, TableBody, TableHead} from 'mdbreact';


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
    });


    return (
      <div>
      <div className="filter">
      <div className='Form3'>
      <form>
     <Input label="Search ID"
    icon="user"
    type="text"
    onChange={this.handleChange}
    value={this.props.filterText}
    name="filterText"
    required
    />
      </form>
      </div>


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
          {rows}
          </TableBody>
    </Table>
        </div>
     
      </div>
      </div>
    );
  }
}

export default ViewRow;