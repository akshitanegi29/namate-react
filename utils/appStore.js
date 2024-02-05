import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
//create stosre
const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default appStore