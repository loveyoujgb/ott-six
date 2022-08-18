import { configureStore } from "@reduxjs/toolkit";
import movies from "../modules/moviesSlice";
import signUp from "../modules/signUpSlice";
import login from "../modules/loginSlice";

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    movies,
    signUp,
    login,
  },
});
