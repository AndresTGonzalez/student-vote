import { configureStore } from "@reduxjs/toolkit";

import courseSlice from "./features/courseSlice";
import studentSlice from "./features/studentSlice";

export const store = configureStore({
  reducer: {
    courses: courseSlice,
    students: studentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
