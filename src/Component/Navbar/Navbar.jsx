import { Outlet } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div>
        <h1>Hello</h1>
        <Outlet/>
        </div>
    )
}
export default Navbar;