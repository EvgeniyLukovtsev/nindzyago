import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  categoryId: 0,
  currentPage: 1,
  searchValue: "",
  sort: { name: "алфавиту", sortProperty: "name" },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(
      state,
      action: PayloadAction<{
        name: string;
        sortProperty: string;
      }>
    ) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
