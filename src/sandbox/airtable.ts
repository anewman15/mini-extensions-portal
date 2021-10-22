import Airtable from "airtable";
import { Portal } from "../data/PortalsData";

const base = new Airtable({apiKey: 'keyEoL6yNFbdZBmFd'}).base('appw79tSjX0HfKkhx');

type LoginFieldValuesType = {
  [key:string]: string,
};

export const allStudentsResponse = async (filterString: string) => {
    return await base('Students').select({
    filterByFormula: `OR(${filterString})`,
    fields: ['Name'],
    view: "Grid view",
  }).all();
};

export const getClasses = async (filterString: string) => {
  return await base('Classes').select({
    filterByFormula: `OR(${filterString})`,
    fields: ['Name', 'Students'],
    view: "Grid view",
  }).all();
};

export const getUser = async (portal: Portal, loginFields: LoginFieldValuesType) => {
  const { name } = loginFields;
  return await base(`${portal.usersTableId}`).select({
    filterByFormula: `{Name} = '${name}'`,
    maxRecords: 1,
    fields: ['Name', `${portal.inverseLinkedRecordFieldInUsersTable}`],
    view: "Grid view",
  }).all();
};