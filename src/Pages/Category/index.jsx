import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category=()=>{
    const [category,setCategory] = useState([]);
useEffect(() => {
    axios
    .get('https://fakestoreapi.com/products/categories')
    .then(
        Response=>{
            const res = Response.data;
            setCategory(res);
        });
}, []);
    return(
        <>
        <h1>Categories Page</h1>
        {category.map((param,index)=>(
        <li>{param}</li>))}
        <Link to="/Home">Go back to Home</Link>
        </>
    )
}
export default Category;