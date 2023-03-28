import React from "react";
import { Redirect, Link } from "react-router-dom";

function  DogDetails  ({dogs}) {
    if(!dogs) return <Redirect to = "/dogs"/>
    return(
        <div className = "dogDetails">
            <img src = {dogs.src} alt = {dogs.name} />
            <h2> {dogs.name} </h2>
            <h2> {dogs.age} years old </h2>
            {/* <ul>
                {dogs.facts.map((fact, i) => {
                    <li key = {i} > {fact} </li>
                })}
            </ul> */}
            <Link to = "/dogs"> Go Back </Link>
        </div>
   )
}

export default DogDetails;
