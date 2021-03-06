import React from 'react';
import swal from 'sweetalert';
import "./App.css";
import ViewRow from './ViewRow.js';
import { Table, TableBody, TableHead} from 'mdbreact';


import { BrowserRouter, Route } from 'react-router-dom';


import PouchDB from 'pouchdb';


var db = PouchDB('dataB1');
var docs="";
var name;
var Designation ="";
var Address = "";
var Empid = "";
var employees = {}; 

class view extends React.Component {
  constructor(props) {
    super(props);

     
    this.state = {
      EmpTemp:{},
      filterText: ""
    }
  }

  handleFilter = (filterInput) =>
  {
    this.setState(filterInput);
  }



  handleDestroy = (productId) => {
    this.setState((prevState) => {
      let EmpTemp = prevState.EmpTemp;
      delete EmpTemp[productId];
      return { EmpTemp };
    });
    let temp = productId;
    db.get(temp, function(err, doc) {
      if (err) { return console.log(err); }
      db.remove(doc._id, doc._rev, function(err, response) {
        if (err) { return console.log(err); }
      });
    });
    this.props.history.replace(`/emp/`);
  }



componentDidMount(){
let _this = this;
  // const path1 = this.props.match.params.path;
  // console.log(path1);
//   db.get('emp0', function(err, doc) {
//     if (err) { return console.log(err); }
//     if (doc) { 
//       _this.setState({ EmpTemp : doc });
//     }
//     // console.log(doc);
//   });
  
// console.log(this.state.EmpTemp);


db.allDocs({
    include_docs: true
  }).then(function (result) {
    docs = result.rows.map(function (row) {
      return row.doc;
      
    });
    _this.setState({ EmpTemp : docs });
    
  }).catch(function (err) {
    console.log(err);
  });
  
}


  render() {


    return (
      <div>
         
        <ViewRow 
         filterText = {this.state.filterText}
         onFilter={this.handleFilter}
         onDestroy={this.handleDestroy}
         products={this.state.EmpTemp}
         />  
         </div>
    );

    }
}

export default view;