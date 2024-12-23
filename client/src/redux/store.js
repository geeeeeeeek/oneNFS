import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "./musicPlayerSlice";

const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
  },
});

export default store;
