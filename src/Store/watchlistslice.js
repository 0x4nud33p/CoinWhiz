import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: []
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addCoin: (state, action) => {
      const { id, coin, currentprice, low_24h, high_24h, image } = action.payload;
      const newCoin = {
        id,
        coin,
        currentprice,
        low_24h,
        high_24h,
        image
      };
      state.coins.push(newCoin);
    },
    removeCoin: (state, action) => {
      const idToRemove = action.payload;
      state.coins = state.coins.filter(coin => coin.id !== idToRemove);
    },
    updateCoin: (state, action) => {
      const updatedCoin = action.payload;
      const index = state.coins.findIndex(coin => coin.id === updatedCoin.id);
      if (index !== -1) {
        state.coins[index] = updatedCoin;
      }
    }
  }
});

export const { addCoin, removeCoin, updateCoin } = watchlistSlice.actions;
export default watchlistSlice.reducer;
