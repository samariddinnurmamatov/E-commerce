import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { nameCounter } from "../slices/counterSlice";
import productReducer, { productsName } from "../slices/productsSlice";

const reducer = {
  [nameCounter]: counterReducer,
  [productsName]: productReducer,
};

export const store = configureStore({
  reducer,
});
