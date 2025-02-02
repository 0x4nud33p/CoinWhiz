import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { getUserInfoFromToken } from "../utilities/getUserInfoFromToken.js";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const addCoin = createAsyncThunk(
  "watchlist/addCoin",
  async (coinData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("User Not Authorized");
        return rejectWithValue("User Not Authorized");
      }

      const userInfo = getUserInfoFromToken(token);
      const response = await axios.post(`${BASE_URL}/api/db/addcoin`, {
        ...coinData,
        userId: userInfo.id,
      });

      toast.success("Coin Added to Watchlist!");
      return response.data;
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("Coin already exists in watchlist!");
      } else {
        toast.error("Error adding coin to watchlist");
      }
      return rejectWithValue(error.response?.data);
    }
  }
);

export const removeCoin = createAsyncThunk(
  "watchlist/removeCoin",
  async (coinId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("User Not Authorized");
        return rejectWithValue("User Not Authorized");
      }

      const userInfo = getUserInfoFromToken(token);
      const response = await axios.delete(`${BASE_URL}/api/db/removecoin`, {
        data: { coinId, userId: userInfo.id },
      });

      toast.success("Coin Removed from Watchlist!");
      return response.data;
    } catch (error) {
      toast.error("Error removing coin from watchlist");
      return rejectWithValue(error.response?.data);
    }
  }
);

export const fetchWatchlist = createAsyncThunk(
  "watchlist/fetchWatchlist",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return rejectWithValue("User Not Authorized");
      }

      const userInfo = getUserInfoFromToken(token);
      const response = await axios.get(`${BASE_URL}/api/db/watchlist`, {
        params: { userId: userInfo.id },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const initialState = {
  coins: [],
  loading: false,
  error: null,
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCoin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCoin.fulfilled, (state, action) => {
        state.loading = false;
        state.coins.push(action.payload);
      })
      .addCase(addCoin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(removeCoin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCoin.fulfilled, (state, action) => {
        state.loading = false;
        state.coins = state.coins.filter(
          (coin) => coin.id !== action.payload.coinId
        );
      })
      .addCase(removeCoin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchWatchlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWatchlist.fulfilled, (state, action) => {
        state.loading = false;
        state.coins = action.payload;
      })
      .addCase(fetchWatchlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default watchlistSlice.reducer;
