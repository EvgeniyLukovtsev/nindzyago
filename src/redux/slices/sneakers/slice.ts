import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchType, SneakersItem, SneakersSliceState, Status } from "./types";

export const fetchSneakers = createAsyncThunk(
  "sneaker/fetchSneakersStatus",
  async (params: FetchType) => {
    const { sortBy, order, category, currentPage, search } = params;
    const { data } = await axios.get<SneakersItem[]>(
      `https://65cb6200efec34d9ed8763e5.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data as SneakersItem[];
  }
);

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
