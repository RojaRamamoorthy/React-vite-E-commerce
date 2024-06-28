import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        itemsAdded: (state, action) => {
            const addedItem = state.items.find((x) => x.id === action.payload.id);
            if (addedItem) {
                addedItem.quantity += 1;
            } 
            else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        itemsDeleted: (state, action) => {
            state.items = state.items.filter((x) => x.id !== action.payload);
        },
        quantityAdded: (state, action) => {
            const addedItem = state.items.find((x) => x.id === action.payload);
            if (addedItem) {
                addedItem.quantity += 1;
            }
        },
        quantityRemoved: (state, action) => {
            const addedItem = state.items.find((x) => x.id === action.payload);
            if (addedItem && addedItem.quantity > 1) {
                addedItem.quantity -= 1;
            }
        },
        orderPlaced: (state, action) => {
            state.orderDetails = state.items.find((x) => x.id === action.payload);
            state.items = state.items.filter((x) => x.id !== action.payload);
        }
    }
});

export const { itemsAdded, itemsDeleted, quantityAdded, quantityRemoved,orderPlaced } = cartSlice.actions;
export default cartSlice.reducer;
