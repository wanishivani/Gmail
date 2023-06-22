import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isMsgopen: false,
    selectedMessage: false,
  },

  reducers: {
    openMsg: (state) => {
      state.isMsgopen = true;
    },

    closeMsg: (state) => {
      state.isMsgopen = false;
    },

    inboxMsg: (state, action) => {
      state.selectedMessage = action.payload;
    },
  },
}); 
export const { openMsg, closeMsg, inboxMsg } = userSlice.actions;
export const selectisMsgopen = (state) => state.user.isMsgopen;
export const selectedMail = (state) => state.user.selectedMessage;

export default userSlice.reducer;
