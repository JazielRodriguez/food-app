import { configureStore } from "@reduxjs/toolkit";
import authState from "./auth-state";
import cartState from "./cart-state";
import userState from "./user-state";
const store = configureStore({
  reducer: {
    auth: authState,
    cart: cartState,
    user: userState,
  },
});
export default store;