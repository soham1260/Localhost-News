import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode : false
};

export const modetoggle = createSlice({
    name: "toggleMode",
    initialState,
    reducers: {
        toggleMode : (state,action) => {
            state.darkMode = !state.darkMode;
        }
    }
});

export const { toggleMode } = modetoggle.actions;
export default modetoggle.reducer;