import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{ //actions and its reducer functions
        //mutating the state here
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.action.pop()
        },
        clearItem: (state) => {
            state.items.length = 0; //[]
        }
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;