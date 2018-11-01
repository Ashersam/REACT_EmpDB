import React from 'react';
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import PouchDB from 'pouchdb';
import ThankYou from './ThankYou';


var db = new PouchDB("signin1");
var temp3="";
var temp4= "";
var temp6={};
var docs1 ="";
var docs ="";
var j;
var errors={};
var reset = {name:""};
class Login extends React.Component {
  // constructor(){
  //   super();
  //   this.gotoDatabase = this.gotoDatabase.bind(this);
  // }


  state = {
   username: {},
   errors:{}
     }
  
handleFormChange = (e) => {
  const target = e.target;
  const value = e.target.value;
  const name = target.name;

  this.setState((preState) => {
    preState.username[name] = value;
    return { username: preState.username };
  }); 

  // myEmail = React.createRef();
  // myPassword = React.createRef();
} 
savedatas = (e) => {
  e.preventDefault();
  var temp3 = this.state.username.newuser;
  var temp4 = this.state.username.newpassword;

  db.put({
    "_id": new Date().toJSON(),
    "name":temp3,
    "pass": temp4,
  })
  
  this.props.history.push(`/thankyou`);
}


  gotoDatabase = (e) => {
    e.preventDefault();

    db.allDocs({
      include_docs: true
    }).then(function (result) {
      docs = result.rows.map(function (row) {
        return row.doc.name;
        
      });
    }).catch(function (err) {
      console.log(err);
    });
    db.allDocs({
      include_docs: true
    }).then(function (result) {
      docs1 = result.rows.map(function (row) {
        return row.doc.pass;
        
      });
    })
    let temp1 = this.state.username.name;
    let temp2 = this.state.username.password;

    for ( j =0;j<docs.length; j++){
      if(docs[j] === temp1 && docs1[j] === temp2){
        this.props.history.push(`/emp`);
        this.setState({
          errors: reset
        });

      }        
      }
      errors["name"] = "Username or Password is Incorrect...:-(";
    console.log(docs);
    console.log(docs1);

    this.setState({
      errors: errors
    });
    
    
}

 
  
  render() {
    return (
      <BrowserRouter>
     
      <div className="login">
     <div className = "heading">
     <header2>Welcome To EMPLOYEES DATABASE FORUM</header2>
     </div> 
      <div className="error_Msg">
      
       {this.state.errors.name}
        </div>  
      <div className="item1">
      <form className="login-form" onSubmit={this.gotoDatabase}>
      <Container>
      <section className="form-dark">
        <Row>
            <Card className="card-image">
              <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <div className="text-center">
               <h2> <a className="white-text mb-5 mt-4 font-weight-bold">
                <strong> EMPLOYEE DATABASE </strong></a></h2>
                  <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong>SIGN</strong> <a className="green-text font-weight-bold">
                   <strong> IN</strong></a></h3>
                </div>
                <Input
                label="UserName" 
                icon="envelope" 
                group type="text" 
                name="name"
                onChange= {this.handleFormChange}
                value={this.state.username.name}
                required
                validate />
                <Input label="Your password"
                icon="lock"
                name="password"
                group type="password" 
                onChange= {this.handleFormChange}
                value={this.state.username.password}
                required
                validate/>
                <Row className="d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <Button color="success" rounded type="submit"   className="btn-block z-depth-1">Sign_In</Button>
                  </div>
                </Row>
              </div>
            </Card>
        </Row>
      </section>
    </Container>
    </form>
    </div>
    <div className="Register">
    <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form className="UserReg" onSubmit={this.savedatas}>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <Input label="Your name" icon="user" group type="text" name = "newuser"
                     onChange = {this.handleFormChange}
                    value = {this.state.username.newuser}
                    required
                     validate error="wrong" success="right"/>
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" required success="right"/>
                    <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" required success="right"/>
                    <Input label="Your password" icon="lock" group type="password" required name = "newpassword"
                     onChange = {this.handleFormChange}
                    value = {this.state.username.newpassword} validate/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit">Register</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      
      </div>
     
    </div>
    </BrowserRouter>

 
    );
  }
} 

export default Login;