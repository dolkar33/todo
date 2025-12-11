import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/signup/store/signupSlice";

export const store = configureStore({
  reducer: { auth: authReducer },
});
