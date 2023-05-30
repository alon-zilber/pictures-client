import { combineReducers, configureStore } from "@reduxjs/toolkit";
import picturesSlice from "./pictures/picturesSlice";

const rootReducer = combineReducers({
  pictures: picturesSlice
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

