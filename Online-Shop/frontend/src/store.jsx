import {configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/CartSlice";
import authSliceReducer from "./slices/AuthSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer ,
        cart: cartSliceReducer ,
        auth: authSliceReducer
    } ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware) ,
    devTools: true
});

export default store;
