import { Record, Records, FieldSet } from "airtable";

const createStudentsArray = (records: Records<FieldSet>) => {
  const studentIdArray: any[] = [];
  records.forEach((record: Record<FieldSet>) => studentIdArray.push(record.fields.Students));
  return studentIdArray.flat();
};

export default createStudentsArray;
