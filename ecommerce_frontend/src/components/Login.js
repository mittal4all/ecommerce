import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
function Login({auth}) {
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    const user = {user_email, user_password };
    const result=await axios.post("http://localhost:5000/auth/login", user)
    if(result.data.token){
        localStorage.setItem("token",result.data.token);
        auth(true);
        toast.success("login successfully")
    }else{
        auth(false);
        toast.error(result.data);
    }

  }
  return (
    <div>
      <h1>Login</h1>
      <hr></hr>
      <Container fluid>
        <Form onSubmit={loginUser}>
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
        <Link to="/register">Register</Link>
      </Container>
    </div>
  );
}
export default Login;
