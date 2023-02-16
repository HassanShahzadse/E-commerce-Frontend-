import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './Checkout.css'
import { removeFromCart } from "../../redux/cart/cartAction";
import { useEffect, useState } from "react";
import { addToCart,increaseQuantity,decreaseQuantity } from "../../redux/cart/cartAction";
import Counter from "../../Component/counter/Counter"
const Checkout = ()=>{
    const dispatch = useDispatch();
const storeData = useSelector(state => state);

const [count,setCount]= useState();

return(
<>
<h1>Checkout </h1>
{/* <h1>{JSON.stringify(storeData)}</h1> */}
<table>
          <thead>
            <tr >
              <th>Product Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove?</th>
            </tr>
          </thead>
          <tbody>
            {storeData.products.map((product) => (
         
              <tr key={product.id}>
                <td>{product.title}</td>
                <td><img src={product.image} alt="" className="details" /></td>
                <td>{product.price * product.counts}</td>
                <td>{product.counts}</td>
                <td><button onClick={()=>{
                  dispatch(removeFromCart(product))}}>Remove from Cart</button></td>
                <td>
                  <Counter props={product.counts} onCountChange={(count)=>{
                    setCount(count)
                    product.counts = count;
                    dispatch(addToCart(product))
                  }}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

<Link to="itemconfirmation" >Item-Confirmation</Link><br></br>
<Link to="userdetails" >User Details</Link>
<Outlet/>
</>
)
}
export default Checkout;