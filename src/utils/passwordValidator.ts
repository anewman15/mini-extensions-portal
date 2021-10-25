const passwordValidator = (formValue: string | undefined, actualValue: string | undefined) => {
  return formValue === actualValue;
};

export default passwordValidator;