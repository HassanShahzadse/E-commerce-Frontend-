import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../Component/Card/Card";
import './Products.css'
function Products() {
    const [item, setItem] = useState([]);
    const[search,setSearch]=useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(
            Response=>{
                const res = Response.data
                setItem(res);
                setSearch(res);
                
            })
    }, [])
    const handleSearch=(e)=>{
        const inputName=e.target.value;
        const searchName=item.filter((param)=>{
            return param.title.toLowerCase().includes(inputName.toLowerCase());
        })
        setSearch(searchName);
    }
    return (
        <>
        <div>
            <input type="text" placeholder="Search Item" onChange={handleSearch}/>
        </div>
      <div className="itemcard">
        {search.map((param,index)=>(
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
      </div>
      </>
    );
  }
  
  export default Products;
