import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coins : []
}

const WatchlistSlice = createSlice({

    name : 'watchlist',
    initialState,
    reducers : {
        addCoin : (state,action) => {
            const {id ,coin , currentprice , chart , change} = action.payload;
            const newCoin = {
                id,
                coin,
                currentprice,
                chart,
                change
            }
            state.coins.push(newCoin)
        },
        removeCoin : (state,action) => {
            const idToRemove = action.payload;
            state.coins = state.coins.filter( coin => coin.id !== idToRemove)
        },
    }

})

export const {addCoin,removeCoin} = WatchlistSlice.actions
export default WatchlistSlice.reducer;