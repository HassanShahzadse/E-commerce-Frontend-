import ErrorPage from "../Pages/404Page";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
import Products from "../Pages/Products/Products";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import Navbar from "../Component/Navbar/Navbar";
import Checkout from "../Pages/Checkout";
import UserDetails from "../Pages/UserDetails";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login"
import PrivateRoutes from "./PrivateRoutes";
const AppRoutes = () =>{
    const userLoggedIn = localStorage.getItem("token")
    console.log(userLoggedIn)
    return(
<Routes>
<Route path="" element={<Navbar />}>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="categories" element={<Category />} />
  <Route path="/*" element={<ErrorPage />} />
  <Route path="/products/:id?" element={<Products />} />
  <Route path="/productDetail/:id?" element={<ProductDetails />} />
  <Route path="/userdetails" element={<UserDetails />} />
  <Route path="/Checkout">
            <Route index={true} element={<PrivateRoutes><Checkout/> </PrivateRoutes> }></Route>
            <Route path="users-detail-form" element={<PrivateRoutes><UserDetails/> </PrivateRoutes> }></Route>
          </Route>
  <Route path="/signup" element={<Signup/>} />
  <Route path="/login" element={<Login/>} />
</Route>
</Routes>
)
}
export default AppRoutes;