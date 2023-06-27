import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        cartProductItems:[]
    },
    reducers:{
        addToCart: (state,action) =>{
            state.cartProductItems = [action.payload, ...state.cartProductItems]
        },
        removeFromCart: (state,action) =>{
            const indexOfId = state.cartProductItems.indexOf(action.payload);
            state.cartProductItems.splice(indexOfId,1);
        },
        clearAllItems: (state) => {
            state.cartProductItems = []
        }
    }
});

export default CartSlice;