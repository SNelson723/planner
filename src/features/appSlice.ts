import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  url: string;
  token: string;
}

const initialState: AppState = {
  url: "http://localhost:5000/",
  token: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = appSlice.actions;
export default appSlice.reducer;