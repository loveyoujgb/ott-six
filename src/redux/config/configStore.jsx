import { configureStore } from "@reduxjs/toolkit";
import modules from "../modules/modulesSlice";

export const store = configureStore({
  // devTools: process.env.NODE_ENV !== "production",
  reducer: {
    modules,
  },
});

// export default store;
