import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import filterReducer from './filterReducer'
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  filter:filterReducer
});

export default rootReducer;
