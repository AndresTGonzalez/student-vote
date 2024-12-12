import { Student } from "./student";

export type Course = {
  id?: string;
  level: string;
  parallel: string;

  students?: Student[];
};
