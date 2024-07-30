import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const notify = () => toast('Coin Already Exists in Watchlist!');
const success = () => toast.success('Coin Added to Watchlist!');
const removed = () => toast.success('Coin Removed from Watchlist!');

const initialState = {
  coins: []
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addCoin: (state, action) => {
      const { id, coin, current_price, low_24h, high_24h, image } = action.payload;
      const existingCoin = state.coins.find(coin => coin.id === id);
      if (existingCoin) {
        notify();
      } else {
        const newCoin = { id, coin, current_price, low_24h, high_24h, image };
        state.coins.push(newCoin);
        success();
      }
    },
    removeCoin: (state, action) => {
      const idToRemove = action.payload;
      state.coins = state.coins.filter(coin => coin.id !== idToRemove);
      removed();
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
