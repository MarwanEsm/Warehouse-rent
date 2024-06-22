import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const OfferSlice = createSlice({
    name: "offer",
    initialState: {
        selectedLocation: "",
    },
    reducers: {
        setSelectedLocation: (state, actions: PayloadAction<string>) => {
            state.selectedLocation = actions.payload
        }
    }
})

export const { setSelectedLocation } = OfferSlice.actions

export default OfferSlice.reducer