import React, { Dispatch} from 'react';

type LoginFields = {
  [key:string]: string,
};

type LoginFieldValuesType = {
  [key:string]: string,
};

type InputFieldProps = {
  field: {
    type: string,
    name: string,
  },
  loginFields: LoginFieldValuesType,
  setLoginFields: Dispatch<LoginFields>,
};

const InputField = ({ field, loginFields, setLoginFields }: InputFieldProps) => {
  const fieldName = field.name.toLowerCase();
  return (
    <label htmlFor={fieldName}>
      <div className="text-xl font-bold my-2">{field.name}</div>
      <input
        className="block border rounded-md py-1 px-2"
        type={field.type}
        name={fieldName}
        onChange={(event) => setLoginFields(
          { ...loginFields,
            [event.target.name]: event.target.value,
          }
        )}
        required
      />
    </label>
  )
};

export default InputField;
