// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './slices/coursesSlice';


export const store = configureStore({
  reducer: {
    courses: coursesReducer,  // Now it correctly refers to the coursesReducer
  },
});
