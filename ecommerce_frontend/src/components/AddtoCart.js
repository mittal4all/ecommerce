import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import {Link} from "react-router-dom";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
function AddtoCart() {
  const { id } = useParams();
  const [price,setPrice]=useState("");
  const [orders,setOrders]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(`http://localhost:5000/addtocart/${id}`);
      //const result1 = await axios.get("http://localhost:5000/getCart")
      setPrice(result.data.totalPrice)
      setOrders(result.data.products);
    };
    fetchData();
  }, []);
    return (
      <div>
      <Header />
      <CardDeck>
      {orders.map((ele,index)=>{
        console.log(ele);
        return(
      <Card key={index}>
        <CardImg top width="100%" src={ele.product_image} alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: {ele.product_name}</CardTitle>
          <CardSubtitle>Price: {ele.product_price}</CardSubtitle>
          <CardText>Description: {ele.product_description}.</CardText>
        </CardBody>
      </Card>
        )
      })}
      </CardDeck>
      <CardDeck>
        <CardBody>
        <CardText>Total amount:{price}</CardText>
        </CardBody>
      </CardDeck>
      </div>
    );
  }

export default AddtoCart;
