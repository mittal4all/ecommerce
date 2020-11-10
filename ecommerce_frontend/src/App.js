import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AboutPage from "./components/AboutPage";
import SeeOrders from "./components/SeeOrders";
import CreateOrder from "./components/CreateOrder";
import AddtoCart from "./components/AddtoCart";

toast.configure();

function App() {
  const [isAuth,setAuth]=useState(false);
  function auth(boolean){
    setAuth(boolean);
  }
  async function forAuth(){
    try {
        const response=await axios({
            method:'GET',
            url:"http://localhost:5000/auth/is-verify",
            headers:{token:localStorage.token}
        });
        response.data===true?setAuth(true):setAuth(false)
    } catch (error) {
        console.log(error.message);
    }
}
  useEffect(()=>{
    forAuth()
},[])
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact render={props=> !isAuth?(<Login {...props} auth={auth}/>):(<Redirect to="/dashboard" />)}/>
      <Route path="/register" exact render={props=> !isAuth?(<Register {...props} auth={auth}/>):(<Redirect to="/dashboard" />)}/>
      <Route path="/dashboard" exact  render={props=> isAuth?(<Dashboard {...props} auth={auth}/>):(<Redirect to="/login" />)}/>
      <Route path="/create" exact component={CreateOrder} />
      <Route path="/check" exact component={SeeOrders} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/cart" component={AddtoCart} />
    </Router>
  );
}

export default App;
