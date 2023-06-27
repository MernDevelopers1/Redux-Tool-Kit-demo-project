import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        products: productSlice.reducer
    }
});

export default store;