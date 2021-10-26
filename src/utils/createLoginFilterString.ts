import { LoginFieldValuesType } from "../components/Login";

const createLoginFilterString = (loginFieldValues: LoginFieldValuesType) => {
  const loginFieldNames = Object.keys(loginFieldValues);
  const strings = loginFieldNames.map((fieldName: string) => `{${fieldName}} = '${loginFieldValues[fieldName]}'`);
  return strings.join(', ');
};

export default createLoginFilterString;
