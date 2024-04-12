import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentSlice"; // Assuming your slice is in this file

const store = configureStore({
  reducer: {
    student: studentReducer,
    // Add other reducers here if needed
  },
});

export default store;
