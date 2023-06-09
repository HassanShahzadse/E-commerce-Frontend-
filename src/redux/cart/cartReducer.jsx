import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType";
const initialState = {
  products: [],
  quantity: [],
};
const ShoppinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.product.id
      );
      if (existingProductIndex === -1) {
        // Add new product
        return {
          ...state,
          products: [...state.products, action.payload.product],
        };
      } else {
        // Update existing product
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].counts +=
          action.payload.product.counts;

        return {
          ...state,
          quantity: state.quantity + 1,
          products: updatedProducts,
        };
      }
    case REMOVE_FROM_CART:
      const newProducts = state.products.filter(
        (product) => product.id !== action.payload.product.id
      );
      return {
        ...state,
        products: newProducts,
      };
    default:
      return state;
  }
};

export { ShoppinReducer };
