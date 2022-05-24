import { createSlice } from "@reduxjs/toolkit";
const cart = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    }
  },
});
export const cartActions = cart.actions;
export default cart.reducer;