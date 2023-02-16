import { ADD_TO_CART,REMOVE_FROM_CART,INCREASE_COUNTER,DECREASE_COUNTER } from "./cartType";
export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: {
        product: product,
        
      }

    };
  };
  export const removeFromCart = (product) => {
    return {
      type: REMOVE_FROM_CART,
      payload: { product }
    };
  };
  export const increaseQuantity = (product) => {
    return {
      type: INCREASE_COUNTER,
      payload: { product }

    };
  };
  
  export const decreaseQuantity = (product) => {
    return {
      type: DECREASE_COUNTER,
      payload: product,
    };
  };