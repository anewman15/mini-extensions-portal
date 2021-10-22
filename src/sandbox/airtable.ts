import Airtable from "airtable";
import { LoginFieldValuesType } from "../components/Login";
import { AirtableField, AirtableTextField, Portal } from "../data/PortalsData";

const base = new Airtable({apiKey: 'keyEoL6yNFbdZBmFd'}).base('appw79tSjX0HfKkhx');

export const getLinkedTableData = async (portal: Portal, filterString: string) => {
    return await base(`${portal.usersTableId}`).select({
    filterByFormula: `OR(${filterString})`,
    fields: ['Name'],
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
  const { name } = loginFieldValues;
  return await base(`${portal.usersTableId}`).select({
    filterByFormula: `{Name} = '${name}'`,
    maxRecords: 1,
    fields: ['Name', `${portal.inverseLinkedRecordFieldInUsersTable}`],
    view: "Grid view",
  }).all();
};