import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./signupThunk";
import { loginUser } from "../../login/store/loginThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    },
    loadTokenFromStorage: (state) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
          state.token = token;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const { logout, loadTokenFromStorage } = authSlice.actions;
export default authSlice.reducer;
