import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_PRODUCTS } from "../../../dummy-products";

const  productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        item:[],
    },
    reducers: {
        addItemToCart(state,action){
            const updateItems = [...state.item]
            const existingItemIndex = updateItems.findIndex(
                cartItem => cartItem.id === action.id
            )
            const existingItem = updateItems[existingItemIndex]
            if (existingItem){
                const updateItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1 
                }
                updateItems[existingItemIndex] = updateItem
            } else {
                const product = DUMMY_PRODUCTS.find(
                    product => product.id = action.payload
                )
                updateItems.push ({
                    id:product.id,
                    name:product.title,
                    price:product.price,
                    quantity: 1
                })
            }
            state.item = updateItems 
        },
        updateQuantity(state,action){
            const updateItems = [...state.item]
            const updateItemIndex = updateItems.findIndex(
                item => item.id === action.payload.productId
            )
            const  updateItem = {
                ...updateItems[updateItemIndex]
            }
            updateItem.quantity += action.payload.amount
            if(updateItem.quantity <= 0){
                updateItems.splice(updateItemIndex,1)
            }else {
                updateItems[updateItemIndex] = updateItem
            }
            state.item = updateItems;

        }
        }
})



export const {addItemToCart, updateQuantity} = productSlice.actions;
export default productSlice.reducer