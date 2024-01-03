import { createSlice } from "@reduxjs/toolkit";
import { appState } from "../../Types/reduxTypes";

const initialState: appState = {
  loading: false,
};
const appSlice = createSlice({
  name: "app-slice",
  initialState,
  reducers: {
    appLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default appSlice.reducer;

export const { appLoading } = appSlice.actions;
