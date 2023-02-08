import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <>
        <h1>Home Page</h1>
        <Link to="/categories">Categeries</Link>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/Products">All Products</Link>
        </>
    )
}
export default Home;