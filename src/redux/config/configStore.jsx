import { configureStore } from "@reduxjs/toolkit";
import movies from "../modules/moviesSlice";

export const store = configureStore({
  // devTools: process.env.NODE_ENV !== "production",
  reducer: {
    movies,
  },
});

// export default store;
