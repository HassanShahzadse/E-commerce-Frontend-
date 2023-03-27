import axios from "axios";

export const getProductsByCategory = (category) => {
  return axios.get(
    `http://localhost:5000/product/getProductByCategory?category=${category}`
  );
};

export const getAllProducts = () => {
  return axios.get(`http://localhost:5000/product/getProduct`);
};
