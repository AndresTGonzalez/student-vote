import { Course } from "@/models/course";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetch("http://localhost:5500/courses");
    return response.json();
  }
);

export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (course: Course) => {
    const response = await fetch("http://localhost:5500/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    return response.json();
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async (course: Course) => {
    const response = await fetch(`http://localhost:5500/courses/${course.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    return response.json();
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (id: string) => {
    const response = await fetch(`http://localhost:5500/courses/${id}`, {
      method: "DELETE",
    });
    return response.json();
  }
);
