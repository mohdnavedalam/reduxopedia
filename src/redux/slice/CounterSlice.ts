import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./DestinationSlice";
import { resetReduxopedia } from "../actions/action";

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
        // resetAllCounters: (state: any) => {
        //     state.count = 0;
        // }
    },
    extraReducers: (builder: any) => {
        // builder.addCase("destinations/resetDestination", (state: any, /*action: any*/) => {
        // builder.addCase(resetDestination.toString(), (state: any) => {
        builder.addCase(resetReduxopedia, (state: any, /*action: any*/) => {
            state.count = 0;
            //console.log(action.payload);
        });
    },
});

export const {increment, decrement, reset, decrementMultiplier, incrementMultiplier, resetMultiplier, /*resetAllCounters*/} = CounterSlice.actions;
export const counterReducer = CounterSlice.reducer;