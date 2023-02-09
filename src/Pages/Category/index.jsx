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
        <h1>Select a Categories</h1><br></br><br></br>
        {category.map((p,index)=>(
            <li>
        <Link to={`/products/${p}`} key={index}>{p}</Link></li>))}
        </>
    )
}
export default Category;