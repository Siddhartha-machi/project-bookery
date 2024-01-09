import { createSlice } from "@reduxjs/toolkit";
import { userState } from "../../Types/reduxTypes";
import { ROLES } from "../../Global/Constants";

const initialState: userState = {
  currentUser: {
    first_name: "Siddhartha Reddy",
    last_name: "Machi",
    role: ROLES.club_admin,
    username: null,
  },
  usersList: [],
};
const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = { ...action.payload };
      return state;
    },
    resetUser: (state) => {
      state.currentUser = { ...initialState.currentUser };
      return state;
    },
    setUsersList: (state, action) => {
      state.usersList = action.payload;
      return state;
    },
  },
});

export default userSlice.reducer;

export const { setCurrentUser, resetUser, setUsersList } = userSlice.actions;
