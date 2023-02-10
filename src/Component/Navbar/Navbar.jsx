import { Link, Outlet } from "react-router-dom";
import './navbar.css'
const Navbar = ()=>{
    return(
        <>
        <div className="Navbar">
            <div className="title">
        <h1>E-Store</h1>
        </div>
        <div className="Links">
            <ul className="navbarul">
        <li><Link to="/categories" className="navbarli">Categeries</Link></li>
        <li><Link to="/Products" className="navbarli">All Products</Link></li>
        <li><Link to="/checkout" className="navbarli">Checkout</Link></li>
        </ul>
        </div>
        
        </div>
        <Outlet/>
        </>
    )
}
export default Navbar;