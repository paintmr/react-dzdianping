import { combineReducers } from "redux";
import products from "./products";
import shops from "./shops";
import orders from "./orders";
import comments from "./comments";

const entityRootReducer = combineReducers({
  products,
  shops,
  orders,
  comments
})

export default entityRootReducer