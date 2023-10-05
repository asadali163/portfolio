import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  selectedProject: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    fetchProjectsOnce: (state, action) => {
      state.projects = action.payload;
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = state.projects.find(
        (project) => project.id === action.payload
      );
    },
    emptySelectedProject: (state) => {
      state.selectedProject = null;
    },
  },
});

export default projectSlice.reducer;
export const { fetchProjectsOnce, setSelectedProject, emptySelectedProject } =
  projectSlice.actions;
