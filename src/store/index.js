import { configureStore } from "@reduxjs/toolkit";
import authState from "./auth-state";
const store = configureStore({
  reducer: {
    auth: authState,
  },
});
export default store;