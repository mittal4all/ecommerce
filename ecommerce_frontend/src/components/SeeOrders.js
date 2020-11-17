import React, { useState, useEffect } from "react";
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
import { toast } from "react-toastify";
import Header from "./Header";
import axios from "axios";
import {useSelector,useDispatch} from "react-redux"
import { seeDATA } from "../redux/actions/orderAction";

function Seeorders() {
  // const orders=useSelector((state)=>{
  //   return console.log(state);
  // });
  const orders=useSelector(state=>state.orderReducer.orders)
  console.log("@@@@@@@@",orders)
  const dispatch=useDispatch();
  //const [orders, ordersArr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if(orders.length===0){
        console.log(orders.length);
      dispatch(seeDATA());
      }
    };
    fetchData();
  }, []);
  async function AddCart(id) {
    const result = await axios.post(`http://localhost:5000/addtocart/${id}`);
    if (result.status === 200) {
      toast.success("item added in cart");
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

                <Button onClick={(e) => AddCart(ele.id)}>Add to cart</Button>
              </CardBody>
            </Card>
          );
        })}
      </CardDeck>
    </div>
  );
}

export default Seeorders;
