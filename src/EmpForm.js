import React from 'react';
import "./App.css";
import {FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
<nav className="navbar"> <h1><Link to="/emp">Homepage</Link></h1> 
</nav>
     
      <article>

        
      <div className="Form">
      <div className="Empform">
      <form name="EmpForm"  onSubmit={this.submituserRegistrationForm}>
        <h3>Enter A New Emp Details</h3>        
        <p>
        <label>
            EmpName
            <br />
        <FormControl
            type="text" 
            name="name" 
            maxLength="15"
            required
            onChange={this.handleformChange}
            value={this.state.Emp.name}
            />
            </label>
            </p> 
        <div className="errorMsg">{this.state.errors.name}</div>
        <p>
          <label>
            Designation
            <br />
            <FormControl
            type="text" 
            name="Designation" 
            maxLength="15"
            required
            onChange={this.handleformChange}
            value={this.state.Emp.Designation}
             />
          </label>
        </p>
        <div className="errorMsg">{this.state.errors.Designation}</div>
        <p>
          <label>
            Address
            <br />
            <FormControl
            type="text" 
            name="Address" 
            required
            onChange={this.handleformChange}
            value={this.state.Emp.Address}
             />
          </label>
        </p>
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