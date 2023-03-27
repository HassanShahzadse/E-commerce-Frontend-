import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((Response) => {
        const res = Response.data;
        setCategory(res);
      });
  }, []);
  return (
    <>
      <div className="category_container">
        <h1>Categories</h1>
        <div className="card-deck">
          <div className="category_container">
            <img
              src="https://imageproxy.wolt.com/venue/624eafab339c448403cc8adf/601740e6-b66c-11ec-bf15-8e560a13fd11_shutterstock_1875797689.jpg"
              className="card-img-top"
              alt="Electronics"
            />
            <div className="card-body">
              <Link to="/products/electronics" className="btn btn-primary">
                <h5 className="card-title">Electronics</h5>
              </Link>
            </div>
          </div>
          <div className="card">
            <img
              src="https://bnsec.bluenile.com/bluenile/is/image/bluenile/2023Q1-JSP-hero-desktop?$alloy_default$&wid=850&hei=431&crop=1113%2C724%2C2965%2C1504&fmt=pjpeg"
              className="card-img-top"
              alt="Jewelery"
            />
            <div className="card-body">
              <Link to="/products/jewelery" className="btn btn-primary">
                <h5 className="card-title">Jewelery</h5>
              </Link>
            </div>
          </div>
          <div className="card">
            <img
              src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&w=384&q=100"
              className="card-img-top"
              alt="Men's Clothing"
            />
            <div className="card-body">
              <Link to="/products/men's%20clothing" className="btn btn-primary">
                {" "}
                <h5 className="card-title">Men's Clothing</h5>
              </Link>
            </div>
          </div>
          <div className="card">
            <img
              src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-13.png&w=384&q=100"
              className="card-img-top"
              alt="Women's Clothing"
            />
            <div className="card-body">
              <Link
                to="/products/women's%20clothing"
                className="btn btn-primary"
              >
                <h5 className="card-title">Women's Clothing</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
