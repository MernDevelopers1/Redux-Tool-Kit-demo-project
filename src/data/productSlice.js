import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import productlist from "../data/productList.json";
export const fetchAllProducts = createAsyncThunk('fetch-all-products', async (apiUrl) =>{
    console.log("called!!");
    const response = await fetch(apiUrl);
    // console.log(response.json());
    return response.json();
});

const productSlice = createSlice({
    name:"Product",
    initialState:{data:[], fetchStatus: ''},
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllProducts.fulfilled, (state,action)=>{
            state.data = action.payload
            state.fetchStatus = "success"
        })
        .addCase(fetchAllProducts.pending, (state) =>{
            state.fetchStatus = 'loading'
        })
        .addCase(fetchAllProducts.rejected,(state)=>{
            state.data = productlist.products
            state.fetchStatus = 'error'
        })
    }
})

export default productSlice;