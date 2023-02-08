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
        {category.map((p,index)=>(
        <Link to={`/products/${p}`} key={index}>{p}</Link>))}
        </>
    )
}
export default Category;