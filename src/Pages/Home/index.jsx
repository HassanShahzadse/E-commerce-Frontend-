import { Link, useParams } from "react-router-dom";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../utils/Services/api";
import React, { useEffect, useState } from "react";
import Card from "../../Component/Card/Card";
import "./Home.css";
import Footer from "../../Component/footer";

const Home = () => {
  //Image Slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Ftwo%2Fbanner-2.jpg&w=3840&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Ftwo%2Fbanner-1.jpg&w=1920&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Ftwo%2Fbanner-3.jpg&w=1920&q=100",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  //Get Products from Backend
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (id) {
      getProductsByCategory(id).then((response) => {
        const res = response.data;
        setItem(res);
        setSearch(res);
      });
    } else {
      getAllProducts().then((response) => {
        const res = response.data;
        setItem(res);
        setSearch(res);
      });
    }
  }, [id]);
  return (
    <>
      <div className="carousel">
        {images.length > 0 && (
          <div className="carousel-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={`carousel-image ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="categoriesSlider">
        <div className="categoriesCard">
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fwoman.jpg&w=128&q=75"
            alt=""
          />
          <Link to="/products/women's%20clothing">
            <h1>women's clothing</h1>
          </Link>
        </div>
        <div className="categoriesCard">
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fman.jpg&w=128&q=75"
            alt=""
          />
          <Link to="products/men's%20clothing">
            <h1>men's clothing</h1>
          </Link>
        </div>
        <div className="categoriesCard">
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Ftwo%2Fjewellers%2F1.png&w=384&q=75"
            alt=""
          />
          <Link to="products/jewelery">
            <h1>jewelery</h1>
          </Link>
        </div>
        <div className="categoriesCard">
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fwatch.jpg&w=128&q=75"
            alt=""
          />
          <Link to="products/electronics">
            <h1>electronics</h1>
          </Link>
        </div>
      </div>
      <div className="bestSeller"></div>
      <div className="bestSeller">
        <h1>Best Sellers</h1>
        <div className="itemcard">
          {search.slice(0, 8).map((param, index) => (
            <Card
              key={index}
              id={param.id}
              price={param.price}
              title={param.title}
              image={param.image}
              category={param.category}
              description={param.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
