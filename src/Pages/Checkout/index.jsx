import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Checkout.css";
import { removeFromCart } from "../../redux/cart/cartAction";
import { useState } from "react";
import { addToCart } from "../../redux/cart/cartAction";
import Counter from "../../Component/counter/Counter";
const Checkout = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);

  const [count, setCount] = useState();

  return (
    <>
      <h1>Checkout </h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {storeData.products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <img src={product.image} alt="" className="details" />
              </td>
              <td>{product.price}</td>
              <td>{product.counts}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(removeFromCart(product));
                  }}
                >
                  Remove from Cart
                </button>
              </td>
              <td>
                <Counter
                  props={product.counts}
                  onCountChange={(count) => {
                    setCount(count);
                    console.log(count);
                    product.counts = count;
                    console.log(product.counts);
                    console.log(product);
                    dispatch(addToCart(product));
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="proceed-checkout"><Link to="/userdetails">Proceed to Checkout</Link></button>
      <Outlet />
    </>
  );
};
export default Checkout;
