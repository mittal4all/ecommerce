import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
function Register({auth}) {
  const [user_nam, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  async function addUser(e) {
    e.preventDefault();
    const user = { user_nam, user_email, user_password };
    const result=await axios.post("http://localhost:5000/auth/register", user)
    if(result.data.token){
        localStorage.setItem("token",result.data.token);
        auth(true);
        toast.success("Registered successfully")
    }else{
        auth(false);
        toast.error(result.data);
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <hr></hr>
      <Container fluid>
        <Form onSubmit={addUser}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={user_nam}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={user_email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={user_password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <input type="submit" value="Submit" />
        </Form>
        <Link to="/login">Login</Link>
      </Container>
    </div>
  );
}
export default Register;
