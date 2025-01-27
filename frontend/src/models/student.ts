import { Course } from "./course";
import { z } from "zod";

export type Student = {
  id?: string;
  identificationCard: string;
  names: string;
  lastNames: string;

  canVote: boolean;
  course?: Course;
};

export type StudentState = {
  data: Student[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export const studentSchema = z.object({
  identificationCard: z.string(),
  names: z.string(),
  lastNames: z.string(),
  canVote: z.boolean(),
  courseId: z.string(),
});
