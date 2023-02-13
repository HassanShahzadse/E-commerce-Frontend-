import { ADD_TO_CART,REMOVE_FROM_CART } from "./cartType";
export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: {
        product: product
      }

    };
  };
  export const removeFromCart = id => {
    return {
      type: REMOVE_FROM_CART,
 
    };
  };