import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import darkModeReducer from "./darkModeSlice";

export const store = configureStore({
  reducer: {
    DarkMode: darkModeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
