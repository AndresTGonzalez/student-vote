import { z } from "zod";

import { Student } from "./student";

export type Course = {
  id?: string;
  level: string;
  parallel: string;

  students?: Student[];
};

export const courseSchema = z.object({
  id: z.string().optional(),
  level: z.string().min(2, "El nivel debe tener al menos 2 caracteres"),
  parallel: z.string(),
});

export type CourseState = {
  data: Course[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};
