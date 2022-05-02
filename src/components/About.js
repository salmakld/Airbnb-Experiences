import "../App.css"
import React from 'react';

import ImageGrid from "../images/image_grid.png"

export default function Navbar  () {
    return (
        <div className="about">
            <img src={ImageGrid} alt="image_grid"/>
            <h1 className="about--title"> Online Experiences </h1>
            <p className="about--text">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}