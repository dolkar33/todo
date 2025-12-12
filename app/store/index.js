import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../pages/auth/login/store/loginSlice";

export const store = configureStore({
  reducer: { auth: loginReducer },
});
