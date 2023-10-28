import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "demo",
  desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    // set description
    setDesc(state, action) {
      state.desc = action.payload.desc;
      state.title = action.payload.name;
    },
  },
});

export const { openModal, closeModal, setDesc } = modalSlice.actions;
export default modalSlice.reducer;
