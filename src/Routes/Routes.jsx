import ErrorPage from "../Pages/404Page";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
import Products from "../Pages/Products/Products";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import Navbar from "../Component/Navbar/Navbar";
import Checkout from "../Pages/Checkout";
import ItemConfirmation from "../Pages/item-confirmation";
import UserDetails from "../Pages/UserDetails";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login"
const AppRoutes = () =>{
    const userLoggedIn = localStorage.getItem("token")
    return(
<Routes>
<Route path="" element={<Navbar />}>
  <Route path="/" element={<Home />} />
  <Route path="categories" element={<Category />} />
  <Route path="/*" element={<ErrorPage />} />
  <Route path="/products/:id?" element={<Products />} />
  <Route path="/productDetail/:id?" element={<ProductDetails />} />
  <Route path="/checkout" element={userLoggedIn ? <Checkout /> : <Navigate to="/Login"/>}>
    <Route path="userdetails" element={<UserDetails />} />
    <Route path="itemconfirmation" element={<ItemConfirmation />} />
  </Route>
  <Route path="/signup" element={<Signup/>} />
  <Route path="/login" element={<Login/>} />
</Route>
</Routes>
)
}
export default AppRoutes;