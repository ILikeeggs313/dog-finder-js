import React from "react";
import { Link } from "react-router-dom";
import {dogs} from "./App";

function DogList ({dogs})  {
   
    return(
        <div className = "DogList">
            <h2> Pet's list: </h2>
            
            {dogs.map(dogData => (
                <div key = {dogData.name.toLowerCase()}>
                    <img src={dogData.src} alt={dogData.name} />
                    <Link to = {`/dogs/${dogData.name.toLowerCase()}`}>
                        {dogData.name}
                    </Link>

                </div>
            ))}
        </div>
    )
}

export default DogList;