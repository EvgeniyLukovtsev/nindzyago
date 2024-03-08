import { createSlice } from "@reduxjs/toolkit";
import { fetchSneakers } from "../asyncThunk";

import { SneakersSliceState, Status } from "./types";

const initialState: SneakersSliceState = {
  items: [],
  status: Status.LOADING,
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
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = sneakersSlice.actions;

export default sneakersSlice.reducer;
