import { createSlice } from "@reduxjs/toolkit";
const userInfo = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export const userInfoActions = userInfo.actions;
export default userInfo.reducer;