import { createSlice, type PayloadAction } from "@reduxjs/toolkit"; 

interface UserState {
  id: number;
  username: string;
  email: string;
}

const initialState: UserState = {
  id: 0,
  username: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
