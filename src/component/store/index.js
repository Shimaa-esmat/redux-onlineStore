import { configureStore } from "@reduxjs/toolkit";
import productSlices from "./slices/product-slices";

export const store = configureStore({
    reducer: {
        product: productSlices,
    }
})

export default store