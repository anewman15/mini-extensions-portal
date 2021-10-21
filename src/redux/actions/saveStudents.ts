import { SAVE_STUDENTS } from "./types";

type hashType = {
  [key: string]: string
};

const saveStudents = (studentsData: hashType) => (
  {
    type: SAVE_STUDENTS,
    payload: {
      studentsData,
    }
  }
);

export default saveStudents;
