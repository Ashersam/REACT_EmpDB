import React from 'react';
import swal from 'sweetalert';
import "./App.css";
import PouchDB from 'pouchdb';


var db = PouchDB('data');
class Empview extends React.Component {
  constructor(props) {
    super(props);

    this.destroy = this.destroy.bind(this);
  }


  destroy() {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Emp data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.props.onDestroy(this.props.product._id);  

        swal("Your data has been deleted load again to reflect changes !", {
          icon: "success",
        });
      } else {
        swal("Your data is safe!");
      }
    });
    
  }



  render() {
    var name = this.props.product.name;
    var Designation = this.props.product.designation
    var Address = this.props.product.address
    var Empid = this.props.product._id

// console.log(this.state.EmpTemp);  
// console.log(this.state.EmpTemp.name);
    




    return (
      <tr>   
        <td>{Empid}</td>
        <td>{name}</td>
        <td>{Designation}</td>
        <td>{Address}</td>
        <td>
           <button onClick={this.destroy}>x</button>
        </td>
      </tr>
     
    
    );
  }
}

export default Empview;