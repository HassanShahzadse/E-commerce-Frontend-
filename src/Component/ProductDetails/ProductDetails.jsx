import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';
import { useSelector, useDispatch } from "react-redux";
import { addToCart,increaseQuantity,decreaseQuantity } from "../../redux/cart/cartAction";
import Counter from "../counter/Counter"

const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state);
  console.log(products)
  const [counts, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount((prevState) => prevState + 1);
  // };

  // const handleDecrement = () => {
  //   if (counts === 0) {
  //     return;
  //   }
  //   setCount((prevState) => prevState - 1);
  // };

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/getProductById?id=${id}`)
      .then((Response) => {
        setProductDetails(...Response.data);
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
      {/* <button onClick={handleIncrement}>+</button>
      <h1>{counts}</h1>
      <button onClick={handleDecrement}>-</button> */}
      <Counter onCountChange={(count)=>{setCount(count)}}/>
     <button onClick={()=>{
        dispatch(addToCart({...productDetails,counts}))}}>Add to Cart</button>
        {/* <button onClick={()=>{
        dispatch(increaseQuantity(productDetails))}}>+</button>
        <button onClick={()=>{
        dispatch(decreaseQuantity(productDetails))}}>-</button> */}
      
    </div>
  );
};

export default ProductDetails;
