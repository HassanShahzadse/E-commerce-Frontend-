import React from "react";
import './Card.css'
function Card(Props) {
   
    return (
        
      <div className="cardDiv">
        <div className="products">
        <img src={Props.image} className="image"/>
        <h4>{Props.title}</h4>
        <h4>${Props.price}</h4>
        <p>{Props.category}</p>
        {/* <p>{Props.description}</p> */}
        </div>
      </div>
    );
  }
  
  export default Card;