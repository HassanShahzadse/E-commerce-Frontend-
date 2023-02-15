import axios from "axios";

export const getProductsByCategory = (category) => {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`);
};

export const getAllProducts = () => {
  return axios.get(`https://fakestoreapi.com/products`);
};
