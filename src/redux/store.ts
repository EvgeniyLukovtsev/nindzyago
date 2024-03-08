import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filter/slice";
import cart from "./slices/cart/slice";
import sneaker from "./slices/sneakers/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    sneaker,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
