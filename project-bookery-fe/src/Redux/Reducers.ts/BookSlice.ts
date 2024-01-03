import { createSlice } from "@reduxjs/toolkit";
import { bookState } from "../../Types/reduxTypes";

const initialState: bookState = {
  data: [],
  filters: [],
};
const bookSlice = createSlice({
  name: "book-state",
  initialState,
  reducers: {
    loadBooksData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default bookSlice.reducer;

export const { loadBooksData } = bookSlice.actions;
