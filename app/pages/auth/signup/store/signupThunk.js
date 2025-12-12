import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../api/api";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await register({ email, password });

      if (res.status !== 200) {
        return rejectWithValue(res || "Registration failed");
      }

      const result = res.data.data;
      console.log("Returning to Redux:", result);
      return result;
    } catch (err) {
      console.error("Thunk Error:", err);
      return rejectWithValue(err.message);
    }
  }
);
