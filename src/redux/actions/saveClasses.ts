import { Records, FieldSet } from "airtable";
import { SAVE_CLASSES } from "./types";

const saveClasses = (classesData: Records<FieldSet> | []) => (
  {
    type: SAVE_CLASSES,
    payload: {
      classesData,
    }
  }
);

export default saveClasses;
