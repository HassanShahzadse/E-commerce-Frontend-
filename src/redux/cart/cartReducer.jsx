import { ADD_TO_CART,REMOVE_FROM_CART } from "./cartType";
const initialState = {
    products: [],
    quantity: 0
  };
  const ShoppinReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          quantity:state.quantity+1,
          products: [...state.products, action.payload.product]
          // products: state.products.map(product =>
          //   product.id === action.id ? {...product, selected: true} : product,
          // ),
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {...product, selected: false, quantity: 1}
              : product,
          ),
        };
      default:
        return state;
    }
  };
  export {ShoppinReducer};