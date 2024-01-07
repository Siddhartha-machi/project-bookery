import { createSlice } from "@reduxjs/toolkit";
import { appState } from "../../Types/reduxTypes";

const initialState: appState = {
  loading: false,
  loadingLabel: "",
};
const appSlice = createSlice({
  name: "app-slice",
  initialState,
  reducers: {
    appLoading: (state, action) => {
      state.loading = action.payload.loadVal;
      state.loadingLabel = action.payload.label;
    },
  },
});

export default appSlice.reducer;

export const { appLoading } = appSlice.actions;
