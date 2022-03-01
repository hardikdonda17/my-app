import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import md5 from 'md5';
import TableData from './TableData';

function App() {

  
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  var id=1;
  const handleSubmit = (event) => {

    event.preventDefault();

    console.log(inputs);
    console.log(data);
    console.log(inputs.id);
    console.log(inputs.Fname);
    console.log(inputs.Lname);
    console.log(inputs.email);
    console.log(inputs.phone);
    
  };
  const  data = [
    {
      Id : 20 ,
      fname: 'Hardik',
      lname :'donda',
      email :'hardik@gmail.com',
      phone : 8757648723
    },
    {
      Id : 21 ,
      fname: 'Sandip',
      lname :'donda',
      email :'sandip@gmail.com',
      phone : 8757648723
    },
    {
      Id : 22 ,
      fname: 'Kishan',
      lname :'donda',
      email :'kishan@gmail.com',
      phone : 8757648723
    },
    {
      Id : 23 ,
        fname: 'Shubham',
        lname :'donda',
        email :'shubham@gmail.com',
        phone : 8757648723
    },
    {
      Id : 24 ,
      fname: 'Mohit',
      lname :'donda',
      email :'mohit@gmail.com',
      phone : 8757648723
    },
]
  
  return (
    <>
    <TableData value={data}/>
    <div className="container">
      {" "}
      <Form onSubmit={handleSubmit} className="mt-5">
        <Form.Group className="mb-3" controlId="formBasicFname">
          <Form.Label> First Name </Form.Label>{" "}
          <Form.Control
            type="text"
            placeholder="Enter your First Name"
            name="Fname"
            value={inputs.Fname || ""}
            onChange={handleChange}
          />{" "}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLname">
          <Form.Label> Last Name </Form.Label>{" "}
          <Form.Control
            type="text"
            placeholder="Enter your Last Name"
            name="Lname"
            value={inputs.Lname || ""}
            onChange={handleChange}
          />{" "}
        </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Email </Form.Label>{" "}
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />{" "}
        </Form.Group><Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label> Phone </Form.Label>{" "}
          <Form.Control
            type="text"
            placeholder="Enter your Phone Number"
            name="phone"
            value={inputs.Phone || ""}
            onChange={handleChange}
          />{" "}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>{" "}
        <Button variant="primary" type="submit">
          Submit{" "}
        </Button>{" "}
      </Form>
      <div>
    </div>
    
    </div>
    
    
    
    </>
    
    
  );
}

export default App;
