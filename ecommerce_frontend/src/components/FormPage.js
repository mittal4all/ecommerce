import React from "react";
import { Form, Container } from "react-bootstrap";
import Header from "./Header";
function FormPage(props) {
  return (
    <div>
    <Header />
      <h1>Create Order</h1>
      <hr></hr>
      <Container fluid>
        <Form onSubmit={props.addOrders}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={props.product_name}
              required
              onChange={(e) => {
                props.setProductName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              value={props.product_price}
              required
              onChange={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  props.setProductPrice(e.target.value);
                }
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={props.product_description}
              required
              onChange={(e) => {
                props.setDes(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              required
              onChange={(e) => {
                props.setImage(e.target.files[0]);
              }}
            />
          </Form.Group>
          <input type="submit" value="Submit" />
        </Form>
      </Container>
    </div>
  );
}

export default FormPage;
