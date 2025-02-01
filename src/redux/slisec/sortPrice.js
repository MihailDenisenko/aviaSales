import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortBy: ['Самый дешевый', 'Самый быстрый', 'Оптимальный',],
    sortingOfPrice: 0
}

export const sortPrice = createSlice({
    name: 'sortBy',
    initialState,
    reducers: {
        sortOn(state, action) {
            // console.log(state.sortBy[action.payload], action.payload)
            state.sortingOfPrice = action.payload
        },
    },
})

export const { sortOn } = sortPrice.actions

export default sortPrice.reducer