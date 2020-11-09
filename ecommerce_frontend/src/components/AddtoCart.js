import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function AddtoCart() {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:5000/addtocart/${id}`);
      var obj={
        id:result.data.item.id,
        product_name:result.data.item.product_name,
        qty:result.data.qty,
        price:result.data.price
      }
      const newResult = await axios.post("http://localhost:5000/savecart",obj)
      console.log(`>>>>>>>>>>>>>>>>>>>${JSON.stringify(result)}`);
      console.log(newResult.data);
    };
    fetchData();
  }, []);

  return (
    <div>cart page</div>
  );
  }

export default AddtoCart;
