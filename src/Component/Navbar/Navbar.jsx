import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
const Navbar = ()=>{
    return(
        <>
        <div className="Navbar">
            <div className="navtext">
            <div className="title">
        <h1>E-Store</h1>
        </div>
        <div className="Links">
            <ul className="navbarul">
        <li><Link to="/categories" className="navbarli">Categeries</Link></li>
        <li><Link to="/Products" className="navbarli">All Products</Link></li>
        <li><Link to="/" className="navbarli">Home</Link></li>
        </ul>
        </div>
        </div>
        <div className="cart-icon">
        <Link to="/checkout" className="navbarli">
        <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <ul className="navbarul">
        <Link to={'/login'} className="navbarli"><li>LogIn</li></Link></ul>
    
        </div>
        
        </div>
        <Outlet/>
        </>
    )
}
export default Navbar;