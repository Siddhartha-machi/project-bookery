import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./Reducers.ts/BookSlice";
import appSlice from "./Reducers.ts/appSlice";
import userSlice from "./Reducers.ts/userSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
    books: BookSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
