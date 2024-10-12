import axios from "axios";
import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";
import { getUserInfoFromToken } from "../utilities/getUserInfoFromToken.js";

const notify = () => toast("Coin Already Exists in Watchlist!");
const success = () => toast.success("Coin Added to Watchlist!");
const removed = () => toast.success("Coin Removed from Watchlist!");

const initialState = {
  coins: [],
};

const userInfo = getUserInfoFromToken(localStorage.getItem("token"));
const userid = userInfo ? userInfo.id : null;

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addCoin: (state, action) => {
      const { id, current_price, low_24h, high_24h, image } = action.payload;
      const coinName =
        action.payload.coin || id.charAt(0).toUpperCase() + id.slice(1);

      const existingCoin = state.coins.find((coin) => coin.id === id);
      if (existingCoin) {
        notify();
      } else {
        const newCoin = {
          id,
          coin: coinName,
          current_price,
          low_24h,
          high_24h,
          image,
        };
        state.coins.push(newCoin);
        addCoinDB(newCoin);
      }
    },
    removeCoin: (state, action) => {
      const coinToRemove = action.payload;
      state.coins = state.coins.filter((coin) => coin.id !== coinToRemove.id);
      removeCoinDB(coinToRemove);
    },
  },
});

const addCoinDB = async (newCoin) => {
  try {
    if (!userid) {
      toast.error("User Not Authorized");
      return;
    }

    await axios.post("http://localhost:5050/api/db/addcoin", {
      data: newCoin,
      userid: userid,
    });
    success();
  } catch (error) {
    console.error("Error While Adding Coin to Watchlist:", error);
  }
};

const removeCoinDB = async (coin) => {
  try {
    if (!userid) {
      toast.error("User Not Authorized");
      return;
    }
    await axios.post("http://localhost:5050/api/db/removecoin", {
      data: {
        id: coin.id,
        coin: coin.coin,
        current_price: coin.current_price,
        low_24h: coin.low_24h,
        high_24h: coin.high_24h,
        image: coin.image,
      },
      userid: userid,
    });
    removed();
  } catch (error) {
    console.error("Error While Removing Coin from Watchlist:", error);
  }
};

export const { addCoin, removeCoin } = watchlistSlice.actions;
export default watchlistSlice.reducer;
