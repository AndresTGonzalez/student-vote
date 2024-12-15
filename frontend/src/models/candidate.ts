import { Dignity } from "./dignity";
import { List } from "./list";
import { Student } from "./student";

export type Candidate = {
  id?: string;
  photoURL: string;
  studentId: string;
  dignityId: string;
  listId: string;

  student?: Student;
  dignity?: Dignity;
  list?: List;
};
