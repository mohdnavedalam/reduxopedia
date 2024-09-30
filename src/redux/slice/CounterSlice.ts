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
        reset: (state: any) => {
            state.count = 0;
        },
        decrementMultiplier: (state: any, action: any) => {
            state.count -= Number(action.payload);
        },
        incrementMultiplier: (state: any, action: any) => {
            state.count += Number(action.payload);
        },
        resetMultiplier: (state: any) => {
            state.count = 0;
        },
        resetAllCounters: (state: any) => {
            state.count = 0;
        }
    }
});

export const {increment, decrement, reset, decrementMultiplier, incrementMultiplier, resetMultiplier, resetAllCounters} = CounterSlice.actions;
export const counterReducer = CounterSlice.reducer;