import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { FetchType, SneakersItem } from "./sneakers/types";

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
