import { configureStore } from "@reduxjs/toolkit";
import flashcardsReducer from "./flashcardsSlice";

const store = configureStore({
  reducer: flashcardsReducer,
});

export default store;
