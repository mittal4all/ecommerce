import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {toast} from "react-toastify";
function Dashboard({auth}){
    const [name,setName]=useState("");
    async function getName(){
        try {
            const response=await axios({
                method:'GET',
                url:"http://localhost:5000/dashboard",
                headers:{token:localStorage.token}
            });
            //const newRes=await
            setName(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    const logout=(e)=>{
        e.preventDefault();
        localStorage.removeItem("token");
        auth(false);
        toast.success("logout successfully")
    }
    useEffect(()=>{
        getName()
    },[])
    return(
        <div>
            <Header />
        <div className="jumbotron">
        <h1>Welcome {name}</h1>
        <Link to="/about" className="btn btn-primary btn-lg">
            Learn more
    </Link>
    {"  "}
    <button className="btn btn-primary btn-lg" onClick={e=>logout(e)}>logout</button>
    </div>
    </div>
    )
};

export default Dashboard;