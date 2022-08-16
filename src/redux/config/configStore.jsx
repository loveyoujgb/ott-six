import { configureStore } from "@reduxjs/toolkit";
import movies from "../modules/moviesSlice";
import userInfo from "../modules/userInfoSlice";
import login from "../modules/loginSlice";

export const store = configureStore({
  // devTools: process.env.NODE_ENV !== "production",
  reducer: {
    movies,
    userInfo,
    login,
  },
});

// export default store;
