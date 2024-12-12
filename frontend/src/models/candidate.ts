import { Dignity } from "./dignity";
import { Student } from "./student";

export type Candidate = {
  id?: string;
  photoURL: string;
  studentId: string;
  dignityId: string;
  listId: string;

  student?: Student;
  dignity?: Dignity;
};
