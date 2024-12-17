import { Course, CourseState } from "@/models/course";
import { createSlice } from "@reduxjs/toolkit";

import {
  addCourse,
  deleteCourse,
  fetchCourses,
  updateCourse,
} from "@/redux/services/courseApi";

const initialState: CourseState = {
  data: [],
  status: "idle",
  error: null,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload as Course[];
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(addCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload as Course);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(deleteCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (course) => course.id !== action.payload.id
        );
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(updateCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        const course = action.payload as Course;
        const index = state.data.findIndex((c) => c.id === course.id);
        state.data[index] = course;
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default courseSlice.reducer;
