import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css'

const ProductDetails=()=>{
    const {id}=useParams();
    const [productDetails,setProductDetails]= useState([]);
    useEffect(() => {
        axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then(
            Response=>{
                const res = Response.data;
                setProductDetails(res);
            });
    }, []);
    return(
        <div className="productdetails">
        <h1>Product Details</h1>
        <img src={productDetails.image} alt="" className="details"/>
        <h1>{productDetails.title}</h1>
        <h2>${productDetails.price}</h2>
        <h2>{productDetails.category}</h2>
        <p>{productDetails.description}</p>
        </div>
    )
}
export default ProductDetails;