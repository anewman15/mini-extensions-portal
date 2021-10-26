import { LoginFieldValuesType } from "../components/Login";

const fieldsValueValidator = (formFieldValues: LoginFieldValuesType, apiFieldValues: LoginFieldValuesType) => {
  const formFields = Object.keys(formFieldValues);
  const apiFields = Object.keys(apiFieldValues);

  if (formFields.length !== apiFields.length) { return false };

  const validValues = apiFields.map((key: string) => formFieldValues[key] === apiFieldValues[key]);
  if (validValues.includes(false)) { return false}

  return true;
};

export default fieldsValueValidator;
