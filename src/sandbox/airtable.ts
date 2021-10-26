import Airtable from "airtable";
import { LoginFieldValuesType } from "../components/Login";
import { AirtableField, Portal } from "../data/PortalsData";
import createLoginFilterString from "../utils/createLoginFilterString";

const base = new Airtable({apiKey: 'keyEoL6yNFbdZBmFd'}).base('appw79tSjX0HfKkhx');

export const getLinkedTableData = async (portal: Portal, filterString: string) => {
  const tablePrimaryField = portal.fieldsToDisplay.filter((field: AirtableField) => field.type === 'linkedRecords');
  const tablePrimaryFieldNames = tablePrimaryField.map((field: any) => field.linkedTablePrimaryFieldName);

  return await base(`${portal.usersTableId}`).select({
    filterByFormula: `OR(${filterString})`,
    fields: tablePrimaryFieldNames,
    view: "Grid view",
  }).all();
};

export const getInverseTableData = async (portal: Portal, filterString: string) => {
  return await base(`${portal.tableId}`).select({
    filterByFormula: `OR(${filterString})`,
    fields: portal.fieldsToDisplay.map((field: AirtableField ) => field.name),
    view: "Grid view",
  }).all();
};

export const getUser = async (portal: Portal, loginFieldValues: LoginFieldValuesType) => {
  const loginFieldNames = Object.keys(loginFieldValues);
  const loginFilterString = createLoginFilterString(loginFieldValues);

  return await base(`${portal.usersTableId}`).select({
    filterByFormula: `AND(${loginFilterString})`,
    maxRecords: 1,
    fields: [...loginFieldNames, `${portal.inverseLinkedRecordFieldInUsersTable}`],
    view: "Grid view",
  }).all();
};