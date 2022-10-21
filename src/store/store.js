import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

console.log(productSlice);

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;
