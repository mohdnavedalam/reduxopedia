import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/CounterSlice";
import { destinationReducer } from "./slice/DestinationSlice";
import {increment, decrement, reset, decrementMultiplier, incrementMultiplier, resetMultiplier, /*resetAllCounters*/} from "./slice/CounterSlice";
import {destinationClicked, resetDestination} from "./slice/DestinationSlice";

export const store = configureStore({
    reducer: {
        counterStore: counterReducer,
        destinationStore: destinationReducer,
    },
});

export {increment, decrement, reset, decrementMultiplier, incrementMultiplier, resetMultiplier, /*resetAllCounters,*/ destinationClicked, resetDestination}

// console.log(store.getState());
// store.dispatch({
//     type: "counter/increment",
// });
// console.log(store.getState());

