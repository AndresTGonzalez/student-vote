import { Student, StudentState } from "@/models/student";
import { createSlice } from "@reduxjs/toolkit";

import {
  addStudent,
  deleteStudent,
  fetchStudents,
  fetchStudentsByCourse,
  updateStudent,
} from "@/redux/services/studentApi";

const initialState: StudentState = {
  data: [],
  status: "idle",
  error: null,
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload as Student[];
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(fetchStudentsByCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentsByCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload as Student[];
      })
      .addCase(fetchStudentsByCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(addStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload as Student);
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(deleteStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (student) => student.id !== action.payload.id
        );
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });

    builder
      .addCase(updateStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.map((student) =>
          student.id === action.payload.id ? action.payload : student
        );
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default studentSlice.reducer;
