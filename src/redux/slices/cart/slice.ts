import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";
import { getCartFromLocalStorage } from "../../../utils/getCartFromLocalStorage";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";

const { items, totalPrice } = getCartFromLocalStorage();

const initialState: CartSliceState = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.number !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
