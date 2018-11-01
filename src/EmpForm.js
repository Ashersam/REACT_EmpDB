import React from 'react';
import "./App.css";
import {FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';


const RESET_VALUES = {name:'', Designation:'', Address:''};


class EmpForm extends React.Component {
  // constructor(props){
  //   super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSave = this.handleSave.bind(this);
    // this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    state = {
      Emp: {},
      errors:{}
        };

handleformChange = (e) => {
  const target = e.target;
  const value = e.target.value;
  const name = target.name;

  this.setState((preState) => {
    preState.Emp[name] = value;
    return { Emp: preState.Emp };
  });

  if (this.validateForm()) {
    let fields = {};
    fields["name"] = "";
    fields["Designation"] = "";
    this.setState({fields:fields});
  }
 }




submituserRegistrationForm =  (e) => {
  e.preventDefault();
 if(this.state.errors.Designation||this.state.errors.name!=null){
  var err = 1;
 }
 if(err!==1)
 {
 this.props.onSave(this.state.Emp);
 this.props.history.replace(`/emp/`);
}
this.setState({
  Emp: Object.assign({}, RESET_VALUES),
  errors: RESET_VALUES
});
}





// handleSave(e) {
//   this.props.onSave(this.state.Emp);
//   this.setState({
//     Emp: Object.assign({}, RESET_VALUES),
//     errors: {},
//   });
//   e.preventDefault();
// }

validateForm() {

  let fields = this.state.Emp;
  let errors = {};
  let formIsValid = true;
 
  let temp1 = this.state.Emp.name;
  let temp2 = this.state.Emp.Designation;

  if(temp1!= null){
  if (!fields["name"]) {
    formIsValid = false;
    errors["name"] = "*Please enter your name.";
  }

  if (typeof fields["name"] !== "undefined") {
    if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["name"] = "*Please enter alphabet characters only.";
    }
  }
  }



  if(temp2!= null){
  if (!fields["Designation"]) {
    formIsValid = false;
    errors["Designation"] = "*Please enter the Designation.";
  }

  if (typeof fields["Designation"] !== "undefined") {
    if (!fields["Designation"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["Designation"] = "*Please enter alphabet characters only.";
    }
  }

}
  


  this.setState({
    errors: errors
  });
  return formIsValid;

}



  render() {
    return ( <div>
     
     <header1><h>Enter Following Details To Save in PouchDB</h></header1>
<nav className="navbar"> <h1><Link to="/emp">Home_Page</Link></h1> 
</nav>
     
      <article>

        
      <div className="Form">
      <div className="Empform">
      <form name="EmpForm"  onSubmit={this.submituserRegistrationForm}>
        <h1>Enter A New Emp Details</h1>        
       
        <Input
            type="text" 
            name="name" 
            label="UserName" 
            maxLength="15"
            icon="user"
            required
            onChange={this.handleformChange}
            value={this.state.Emp.name}
            />
        <div className="errorMsg">{this.state.errors.name}</div>
        
            <Input
            type="text" 
            label="Designation" 
            name="Designation" 
            maxLength="15"
            icon="pencil"
            required
            onChange={this.handleformChange}
            value={this.state.Emp.Designation}
             />
        <div className="errorMsg">{this.state.errors.Designation}</div>
        
            <Input
            type="text" 
            label="Address" 
            name="Address" 
            icon="envelope"
            required
            onChange={this.handleformChange}
            value={this.state.Emp.Address}
/>
        <div className="errorMsg">{this.state.errors.Address}</div>
        <input type="submit" className="button" value="Save"/>
        <Link to="/emp">Cancel</Link>
      </form>
 </div>
</div>
</article>
</div>
    );
  }
}

export default EmpForm;