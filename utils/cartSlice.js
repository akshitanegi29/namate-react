import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{ //actions and its reducer functions
        //mutating the state here
        addItem: (state, action) => {
            //redux uses immer BTS
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.action.pop()
        },
        //originalstate = {items: ['pizza','donuts']}
        clearItem: (state) => {
            console.log(state);
            console.log(current(state));
            state.items.length = 0; //[]

            // return { items: [] }; 
            //you can also just return [] here because whatever is returned from reducer is replaced in original state as well
            // so either mutate the existing state or return new state
        }
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;