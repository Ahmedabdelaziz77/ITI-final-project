import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import sidebarReducer from "./sidebarReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
