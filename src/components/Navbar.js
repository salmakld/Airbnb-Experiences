import "../App.css"
import Logo from "../images/airbnb_logo.png"
import React from 'react';


export default function Navbar  () {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo"/>
        </div>
    )
}