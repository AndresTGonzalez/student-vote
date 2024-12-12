import { Candidate } from "./candidate";

export type List = {
  id?: string;
  name: string;
  photoURL: string;

  candidates?: Candidate[];
};
