import { Record, Records, FieldSet } from "airtable";

type hashType = {
  [key: string]: any
};

export const createStudentsHash = (records: Records<FieldSet>) => {
  const hash: hashType  = {};
  records.forEach((record: Record<FieldSet>) => hash[record.id] = record.fields.Name);
  return hash;
};

export default createStudentsHash;
