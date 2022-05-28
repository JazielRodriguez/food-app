import { createSlice } from "@reduxjs/toolkit";
const cart = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.forEach((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
          }
        });
        return;
      }
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },

    deleteItem: (state, action) => {
      if (
        state.cartItems.find(
          (item) => item.id === action.payload.id && item.quantity > 1
        )
      ) {
        state.cartItems.forEach((item) => {
          if (item.id === action.payload.id) {
            item.quantity -= 1;
          }
        });
        return;
      }
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const cartActions = cart.actions;
export default cart.reducer;
