import { configureStore } from "@reduxjs/toolkit";

import modeReducer from './modetoggle'

export const store = configureStore({
    reducer : modeReducer
});