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

      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
