import { Course } from "./course";

export type Student = {
  id?: string;
  identificationCard: string;
  names: string;
  lastNames: string;

  canVote: boolean;
  course?: Course;
};
