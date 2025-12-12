import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./loginThunk";

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("=== REDUCER FULFILLED ===");
        console.log("Action Payload:", action.payload);
        console.log("Token from payload:", action.payload.token);
        console.log("User from payload:", action.payload.user);

        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        if (typeof window !== "undefined" && action.payload.token) {
          console.log("Saving token to localStorage:", action.payload.token);
          localStorage.setItem("token", action.payload.token);

          const savedToken = localStorage.getItem("token");
          console.log("Token retrieved from localStorage:", savedToken);
        } else {
          console.log(
            "NOT saving token. Window defined?",
            typeof window !== "undefined"
          );
          console.log("Token exists?", !!action.payload.token);
        }
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
