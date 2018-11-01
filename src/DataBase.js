import React from 'react';
import "./App.css";
import EmpTable from './EmpTable.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EmpForm from './EmpForm';
import signout from './singout';
import Login from './Login';
import ThankYou from './ThankYou';
// import DB from './db';
import PouchDB from 'pouchdb';
import view from "./view";
 


var db = new PouchDB('dataB1');
var docs ="";
// console.log ("Database created Successfully.");

// db.put(EMPDATA, function(err, response) {
//   if (err) {
//      return console.log(err);
//   } else {
//      console.log("Document created Successfully");
//   }
// });

class DataBase extends React.Component {
  // constructor(props) {
  //   super(props);
   
  //   this.state = {
  //     filterText:'',
  //     products: EMPDATA,
  //     counter:0,
  //   };

  //   // this.handleFilter = this.handleFilter.bind(this);
  //   // this.handleDestroy = this.handleDestroy.bind(this);
  //   // this.saveData = this.saveData.bind(this);
  // }



    state = {
      filterText:'',
      products: {},
      counter:0,
      // db: new DB('notes-react')
    }

    // async componentDidMount() {
    //   const products = await this.state.db.getAllNotes();

    //   this.setState({
    //      products
    //   });
    // }
componentDidMount() {
  const localStorageRef = localStorage.getItem(this.props.path);
  // const localStorageRef1 = localStorage.getItem(this.props.path);
  if(localStorageRef) {
    this.setState({ products: JSON.parse(localStorageRef) });
  } 
}

componentDidUpdate() {
  localStorage.setItem(
    this.props.path,
    JSON.stringify(this.state.products),
    this.state.counter
    );

     
}

  handleFilter = (filterInput) =>
  {
    this.setState(filterInput);
  }

  saveData = (product) => {

    // let { products } = await this.state.db.createNote(product);

    this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));

    if (!product.id) {

      product.id = new Date().getTime();
      product.uni = "emp"+ this.state.counter;
    }
    this.setState((prevState) => {
      let products = prevState.products;
      products[product.id] = product;
      return { products };
    });

    // temp1 = JSON.stringify(this.state.products);

db.put({
  _id: product.uni,
  name: product.name,
  designation : product.Designation,
  address: product.Address
})
db.allDocs({
  include_docs: true
}).then(function (result) {
  docs = result.rows.map(function (row) {
    return row.doc;
    
  });
}).catch(function (err) {
  console.log(err);
});

// console.log(docs);

 }


  handleDestroy = (productId) => {
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[productId];
      return { products };
    });
    
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.history.replace(`emp/"empdatabase"`);
  }


  render() {
 
    return (
      <BrowserRouter>
      <div>
        {/* <Filters 
            filterText = {this.state.filterText}
          onFilter={this.handleFilter}
          />
       */}
       <nav className="navbar">
       

       <h3><Link to="/signout">Sign_Out</Link></h3>
      <h5><Link to="/emp/view">View_DataBase</Link></h5>

       </nav>
     
       <Route exact path= "/emp/data" component={(props) => <EmpForm {...props} onSave={this.saveData} /> }  
        />
      <Route exact path = "/emp/view" component = {view} />
        <Route exact path="/signout" component={signout} />
        <Route exact path= "/emp/" component={(props) =>
       <EmpTable  {...props} 
        filterText = {this.state.filterText}
          onFilter={this.handleFilter}
         products= {this.state.products}
         products1= {this.state.counter}
         onDestroy={this.handleDestroy}
        />  }
        />
      </div>
      </BrowserRouter>
    );
  }
}

export default DataBase;