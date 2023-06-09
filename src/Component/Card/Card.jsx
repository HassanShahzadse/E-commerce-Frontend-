import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = (Props) => {
  return (
    <div className="cardDiv">
      <div className="products">
        <img src={Props.image} className="image" />
        <div className="headingText">
          <Link to={`/productDetail/${Props.id}`}>{Props.title}</Link>
        </div>
        <p>{Props.description}</p>
        <h4>${Props.price}</h4>
      </div>
    </div>
  );
};

export default Card;
