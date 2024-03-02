import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSneakers = createAsyncThunk(
  "sneaker/fetchSneakersStatus",
  async (params) => {
    const { sortBy, order, category, currentPage } = params;
    const { data } = await axios.get(
      `https://65cb6200efec34d9ed8763e5.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

export const sneakersSlice = createSlice({
  name: "sneaker",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setItems } = sneakersSlice.actions;

export default sneakersSlice.reducer;
