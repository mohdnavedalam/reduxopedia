import { createSlice } from "@reduxjs/toolkit";

const initialState = {count: 0};

export const CounterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        // actions
        increment: (state: any) => {
            state.count++;
        },
        decrement: (state: any) => {
            state.count--;
        },
    }
});

export const {increment, decrement} = CounterSlice.actions;
export const counterReducer = CounterSlice.reducer;