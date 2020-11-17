import React, { useState } from "react";
import FormPage from "./FormPage";
import axios from "axios";
import {useDispatch} from "react-redux"
import { addDATA } from "../redux/actions/orderAction";
function CreateOrder() {
  const dispatch=useDispatch();
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_description, setDes] = useState("");
  const [product_image, setImage] = useState("");
  function addOrders(e) {
    e.preventDefault();
    var data = new FormData();
    data.append("product_name", product_name);
    data.append("product_price", product_price);
    data.append("product_description", product_description);
    data.append("product_image", product_image);
    // axios
    //   .post("http://localhost:5000/adddata", data)
    //   .then((res) => console.log(res.data));
    dispatch(addDATA(data));
    setProductName("");
    setProductPrice("");
    setDes("");
    setImage("");
  }

  return (
    <div>
      <FormPage
        addOrders={addOrders}
        product_name={product_name}
        setProductName={setProductName}
        product_price={product_price}
        setProductPrice={setProductPrice}
        product_description={product_description}
        setDes={setDes}
        product_image={product_image}
        setImage={setImage}
      />
    </div>
  );
}

export default CreateOrder;
