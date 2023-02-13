import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';
import { ADD_TO_CART } from "../../redux/cart/cartType";
import { useSelector, useDispatch } from "react-redux";
import { ShoppinReducer } from "../../redux/cart/cartReducer";
import { addToCart } from "../../redux/cart/cartAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state);
  console.log(products)


  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((Response) => {
        setProductDetails(Response.data);
      });
  }, []);

  return (
    <div className="productdetails">
      <h1>Product Details</h1>
      <img src={productDetails.image} alt="" className="details" />
      <h1>{productDetails.title}</h1>
      <h2>${productDetails.price}</h2>
      <h2>{productDetails.category}</h2>
      <p>{productDetails.description}</p>
     <button onClick={()=>{
        dispatch(addToCart(productDetails))}}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
