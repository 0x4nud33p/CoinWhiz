import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import watchlistslice from "./watchlistslice";


const store = configureStore({
    reducer : {
        watchlist : watchlistslice
    }
})

export default store