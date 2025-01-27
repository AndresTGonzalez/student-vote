import { createAsyncThunk } from "@reduxjs/toolkit";
import { Student } from "@/models/student";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/students");
    return response.json();
  }
);

export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (student: Student) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/students",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      }
    );
    return response.json();
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (student: Student) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/students/${student.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      }
    );
    return response.json();
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (id: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/students/${id}`,
      {
        method: "DELETE",
      }
    );
    return response.json();
  }
);
