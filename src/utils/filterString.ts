// import { Record, FieldSet } from "airtable";

const filterString = (ids: string[]) => {
  const string_arr = ids.map((id: string) => `RECORD_ID() = '${id}'`);
  return string_arr.join(', ');
};

export default filterString;