import React from "react";
import { Link } from "react-router-dom";


import Header from "../components/Header";
import Footer from "../components/Footer";


function Login () {
   
    
    return (
    <>
    <Header />
        <h1>Login component</h1><br />
        <Link to="/register">Register</Link>
        <br />

    

        <Link to="/product-list">productList</Link><br />
        <Footer />
    </>
    );
}
export default Login;