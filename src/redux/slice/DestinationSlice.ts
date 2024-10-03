import { createSlice } from "@reduxjs/toolkit";
import { resetReduxopedia } from "../actions/action";

const initialState = () => {
    return {
        destinations: [
            {
                name: "Hong Kong, China",
                days: 7,
                fact: "World's longest covered escalator"
            },
            {
                name: "Tokyo, Japan",
                days: 10,
                fact: "Japan is mostly mountains"
            },
            {
                name: "Auckland, New Zealand",
                days: 14,
                fact: "Last coutry in the world to be inhabited by humans"
            },
        ],
        destinationSelected: null
    };
};

export const DestinationSlice = createSlice({
    name: "destinations",
    initialState: initialState,
    reducers: {
        destinationClicked: (state: any, action: any) => {
            state.destinationSelected = action.payload;
        },
        resetDestination: (state: any, /*action: any*/) => {
            // console.log(action);
            // console.log(action.payload);
            // console.log(state.resetDestination);
            // pending with action parameter
            state.destinationSelected = null;
        }
    },
    extraReducers: (builder: any) => {
        builder.addCase(resetReduxopedia, (state: any) => {
            state.destinationSelected = null;
        });
    }
});
export const destinationReducer = DestinationSlice.reducer;
export const { destinationClicked, resetDestination } = DestinationSlice.actions;