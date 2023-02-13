import { Link, Outlet } from "react-router-dom";

import './Checkout.css'
const Checkout = ()=>{
    return(
        <>
        <h1>Checkout </h1>

        <Link to="itemconfirmation" >Item-Confirmation</Link><br></br>
        <Link to="userdetails" >User Details</Link>
        <Outlet/>
        </>
    )
}
export default Checkout;