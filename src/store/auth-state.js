import { createSlice } from "@reduxjs/toolkit";
const auth = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});
export const authActions = auth.actions;
export default auth.reducer;