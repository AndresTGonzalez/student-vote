import { Course } from "@/models/course";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/courses");
    return response.json();
  }
);

export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (course: Course) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/courses", {
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses/${course.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      }
    );
    return response.json();
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (id: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`,
      {
        method: "DELETE",
      }
    );
    return response.json();
  }
);
