import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../api/api";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await login({ email, password });

      if (res.status !== 200) {
        return rejectWithValue(res || "Login failed");
      }

      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
