import { Record, FieldSet } from "airtable";
import { SAVE_USER } from "./types";

const saveUser = (userData: Record<FieldSet> | {}) => (
  {
    type: SAVE_USER,
    payload: {
      userData,
    }
  }
);

export default saveUser;
