import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return(
        <div className="jumbotron">
        <h2>Ecommerce website</h2>
        <p>Check out the latest sale.</p>
        <Link to="/login" className="btn btn-primary btn-lg">
            Login
    </Link>
    {" "}
    <Link to="/register" className="btn btn-primary btn-lg">
            Register
    </Link>
    </div>
    )
}

export default Home