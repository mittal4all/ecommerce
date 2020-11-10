import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { toast } from "react-toastify";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
function AddtoCart() {
  const [name, setDispaly] = useState("");
  const [price, setPrice] = useState(0);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/getCart");
      if(result.data!==null){
      setPrice(result.data.totalPrice);
      setOrders(result.data.products);
      }
    };
    fetchData();
  }, []);

  async function removeCart(id) {
    console.log(id);
    const result = await axios.delete(`http://localhost:5000/deleteCart/${id}`);
    if (result.status === 200) {
      setPrice(result.data.totalPrice);
      setOrders(result.data.products);
      toast.success("item remove form cart");
    }
    if (result.data.totalPrice === 0) {
      setDispaly("add new item into cart ");
    }
  }
  return (
    <div>
      <Header />
      <CardDeck>
        {orders.map((ele, index) => {
          return (
            <Card key={index}>
              <CardImg
                top
                width="100%"
                src={ele.product_image}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Name: {ele.product_name}</CardTitle>
                <CardSubtitle>Price: {ele.product_price}</CardSubtitle>
                <CardText>Description: {ele.product_description}.</CardText>
                <CardText>Quantity: {ele.qty}.</CardText>
                <Button variant="primary" onClick={(e) => removeCart(ele.id)}>
                  Remove form cart
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </CardDeck>
      <CardDeck>
        <CardBody>
          <CardText>Total amount:{price}</CardText>
          <CardText>{name}</CardText>
        </CardBody>
      </CardDeck>
    </div>
  );
}

export default AddtoCart;
