import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./Redux/Project/projectSlice";
import modalSlice from "./Redux/modal/modalSlice";

const store = configureStore({
  reducer: {
    project: projectSlice,
    modal: modalSlice,
  },
});

export default store;
