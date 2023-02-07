import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../Component/Card/Card";
import './Products.css'
function Products() {
    const [item, setItem] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(
            Response=>{
                const res = Response.data
                setItem(res);
                
            })
    }, [])
    return (
      <div className="itemcard">
        {item.map((param,index)=>(
            <Card
            key={index}
            id={param.id}
            price={param.price}
            title={param.title}
            image={param.image}
            category={param.category}
            description={param.description}
            />
        ))}
        <Card
        />
      </div>
    );
  }
  
  export default Products;
