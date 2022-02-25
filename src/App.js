import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import md5 from 'md5';

function App() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.username);
    console.log(md5(inputs.password));
    
  };
  function Welcome(props) {
    return <h1>Hello, {props.name}<br></br>Password is {props.password}</h1>;
  }
  
  
  return (
    <div className="container">
      {" "}
      <Form onSubmit={handleSubmit} className="mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Email address </Form.Label>{" "}
          <Form.Control
            type="email"
            placeholder="Enter email"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />{" "}
          <Form.Text className="text-muted">
            We 'll never share your email with anyone else.{" "}
          </Form.Text>{" "}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Password </Form.Label>{" "}
          <Form.Control
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>{" "}
        <Button variant="primary" type="submit">
          Submit{" "}
        </Button>{" "}
      </Form>
      <div>
      <Welcome name={inputs.username} password={inputs.password}/>
    </div>
    </div>
    
  );
}

export default App;
