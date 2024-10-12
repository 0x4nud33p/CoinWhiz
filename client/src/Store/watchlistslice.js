import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";
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
      const idToRemove = action.payload;
      state.coins = state.coins.filter((coin) => coin.id !== idToRemove);
      removeCoinDB(idToRemove);
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

const removeCoinDB = async (id) => {
  try {
    if (!userid) {
      toast.error("User Not Authorized");
      return;
    }
    await axios.post("http://localhost:5050/api/db/removecoin", {
      data: { coin: id },
      userid: userid,
    });
    removed();
  } catch (error) {
    console.error("Error While Removing Coin from Watchlist:", error);
  }
};

export const { addCoin, removeCoin } = watchlistSlice.actions;
export default watchlistSlice.reducer;
