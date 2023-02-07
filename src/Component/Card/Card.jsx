
import React from "react";
function Card(Props) {
   
    return (
        
      <div className="cardDiv">
        <h4>{Props.title}</h4>
        <h4>{Props.price}</h4>
        <h4>{Props.category}</h4>
        <h4>{Props.description}</h4>
        <img src={Props.image}/>
      </div>
    );
  }
  
  export default Card;