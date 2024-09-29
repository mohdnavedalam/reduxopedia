import { createSlice } from "@reduxjs/toolkit";

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
            }
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
    }
});
export const destinationReducer = DestinationSlice.reducer;
export const { destinationClicked } = DestinationSlice.actions;