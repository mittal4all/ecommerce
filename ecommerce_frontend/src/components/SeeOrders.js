import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import Header from "./Header";
import axios from "axios";
function Seeorders() {
  const [orders, ordersArr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/getData");
      console.log(result);
      console.log(result.data);
      ordersArr(result.data);
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
      <Link to={`addtocart/${index+1}`}><Button>Add to cart</Button></Link>
    </CardBody>
  </Card>
    )
  })}
  </CardDeck>
  </div>
);
}

export default Seeorders;



