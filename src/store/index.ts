import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/appSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;