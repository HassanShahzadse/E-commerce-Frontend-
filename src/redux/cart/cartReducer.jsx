import { ADD_TO_CART,REMOVE_FROM_CART } from "./cartType";
const initialState = {
    products: [],
    quantity: 0
  };
  const ShoppinReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const existingProductIndex = state.products.findIndex(
          product => product.id === action.payload.product.id
        );
        if (existingProductIndex === -1) {
          // Add new product
          return {
            ...state,
            quantity: state.quantity + 1,
            products: [...state.products, action.payload.product]
          };
        } else {
          // Update existing product
          const updatedProducts = [...state.products];
          updatedProducts[existingProductIndex].quantity += 1;
          return {
            ...state,
            quantity: state.quantity + 1,
            products: updatedProducts
          };
        }
      case REMOVE_FROM_CART:
        const newProducts = state.products.filter(
          product => product.id !== action.payload.product.id
        );
        return {
          ...state,
          products: newProducts,
          quantity: state.quantity - 1
        };
      default:
        return state;
    }
  };

  export {ShoppinReducer};
  //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
  //698008245935-qc56vp89dajkk3oeuqpb9n68uch3fu7q.apps.googleusercontent.com