import { createStore } from "redux";
import { ShoppinReducer } from "./cart/cartReducer";

export const store = createStore(ShoppinReducer);
