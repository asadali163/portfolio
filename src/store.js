import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./Redux/Project/projectSlice";

const store = configureStore({
  reducer: {
    project: projectSlice,
  },
});

export default store;
