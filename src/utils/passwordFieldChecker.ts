import { AirtableField, Portal } from "../data/PortalsData";

const passwordFieldChecker = (portal: Portal) => {
  const loginFieldNames = portal.loginFields.map((field: AirtableField) => field.name);
  return loginFieldNames.includes('Password');
};

export default passwordFieldChecker;
