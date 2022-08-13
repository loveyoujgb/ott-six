import { configureStore } from "@reduxjs/toolkit";
import movies from "../modules/moviesSlice";
import userInfo from "../modules/userInfoSlice";

export const store = configureStore({
  // devTools: process.env.NODE_ENV !== "production",
  reducer: {
    movies,
    userInfo,
  },
});

// export default store;
