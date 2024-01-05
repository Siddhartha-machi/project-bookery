import { createSlice } from "@reduxjs/toolkit";
import { userState } from "../../Types/reduxTypes";

const initialState: userState = {
  first_name: "",
  last_name: "",
  role: null,
  username: null,
};
const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state = { ...action.payload };
      return state;
    },
    resetUser: (state) => {
      state.first_name = "";
      state.last_name = "";
      state.role = null;
      state.username = null;
    },
  },
});

export default userSlice.reducer;

export const { setCurrentUser, resetUser } = userSlice.actions;
