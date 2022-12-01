import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUserPayload } from "../Types/auth";

const INITIAL_STATE = {};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    registerUser: (state, action: PayloadAction<registerUserPayload>) => {},
  },
});

export const { registerUser } = authSlice.actions;

export default authSlice.reducer;
