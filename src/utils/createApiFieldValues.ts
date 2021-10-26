import { FieldSet, Record } from "airtable";
import { AirtableField, Portal } from "../data/PortalsData";

export type ApiFieldValuesType = {
  [key: string]: string,
};

const createApiFieldValues = (portal: Portal, userData: Record<FieldSet> | any) => {
  const loginFieldKeys = portal.loginFields.map((field: AirtableField) => field.name);
  const apiFieldValues: ApiFieldValuesType = {};
  loginFieldKeys.forEach((fieldKey: string) => apiFieldValues[fieldKey] = userData.fields[fieldKey]);
  return apiFieldValues;
};

export default createApiFieldValues;
