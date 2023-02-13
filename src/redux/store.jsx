import redux, {createStore, combineReducers} from 'redux';
import { ShoppinReducer } from './cart/cartReducer';

// const rootReducer= combineReducers({
//     cart: ShoppinReducer

// })
export const store=createStore(ShoppinReducer)