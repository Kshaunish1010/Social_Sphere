import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

// Create the authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // Update the state with user data received from the API
      const newUser = action.payload;
      localStorage.setItem("user", JSON.stringify(newUser));
      state.currentUser = newUser;
    },
    logout: (state) => {
      // Clear user data from the state and local storage
      localStorage.removeItem("user");
      state.currentUser = null;
    },
  },
});

// Export actions and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
