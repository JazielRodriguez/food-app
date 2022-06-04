import { configureStore } from "@reduxjs/toolkit";
import authState from "./auth-state";
import cartState from "./cart-state";
const store = configureStore({
  reducer: {
    auth: authState,
    cart: cartState,
  },
});
export default store;