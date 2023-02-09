import React from "react";
import { Link } from "react-router-dom";
import './Card.css'
const Card=(Props)=> {
   
    return (
        
      <div className="cardDiv">
        <div className="products">
          <Link to={`/productDetail/${Props.id}`}>{Props.title}</Link>
        <img src={Props.image} className="image"/>
        {/* <h4>{Props.title}</h4> */}
        {/* <h4>${Props.price}</h4>
        <p>{Props.category}</p> */}
        {/* <p>{Props.description}</p> */}
        </div>
      </div>
    );
  }
  
  export default Card;