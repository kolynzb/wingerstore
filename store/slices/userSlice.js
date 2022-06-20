import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    llogin: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { llogin, logOut, register } = userSlice.actions;

export default userSlice.reducer;
