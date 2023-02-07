import axios from "axios";
import React, { useEffect, useState } from "react";
function Card() {
    const [price, setPrice] = useState([]);
    const [catogry, setCatogry] = useState([]);
    const [Name, setName] = useState([]);
    const [Img, setImg] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(
            Response=>{
                const res= Response.data;
                console.log(res)
            })
        
    }, [])
    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  }
  
  export default Card;