import { ADD_TO_CART,REMOVE_FROM_CART,INCREASE_COUNTER,DECREASE_COUNTER } from "./cartType";
const initialState = {
    products: [],
    quantity: [],
  };
  const ShoppinReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const existingProductIndex = state.products.findIndex(
          product => product.id === action.payload.product.id
        );
        // console.log(existingProductIndex)
        // console.log("PRODUCT: ", action.payload.product.counts)
        if (existingProductIndex === -1) {
          // Add new product
          return {
            ...state,
            products: [...state.products, action.payload.product],
          
          };
        } else {
          // Update existing product
          const updatedProducts = [...state.products];
          updatedProducts[existingProductIndex].counts += action.payload.product.counts;
         
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
        };
        // case INCREASE_COUNTER:
        //   {
        //     // Update existing product
        //     const updatedProducts = [...state.products];
        //     updatedProducts[existingProductIndex].count += action.payload.product.count;
           
        //     return {
        //       ...state,
        //       quantity: state.quantity + 1,
        //       products: updatedProducts
        //     };
        //   }
        //   case DECREASE_COUNTER:
        //     {
        //       // Update existing product
        //       const updatedProducts = [...state.products];
        //       updatedProducts[existingProductIndex].count -= action.payload.product.count;
             
        //       return {
        //         ...state,
        //         quantity: state.quantity + 1,
        //         products: updatedProducts
        //       };
        //     }
        
      default:
        return state;
    }
  };

  export {ShoppinReducer};