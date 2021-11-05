import React, { Dispatch} from 'react';
import { LoginFieldValuesType } from './Login';

type InputFieldProps = {
  field: {
    type: string,
    name: string,
  },
  loginFieldValues: LoginFieldValuesType,
  setLoginFieldValues: Dispatch<LoginFieldValuesType>,
};

const InputField = ({ field, loginFieldValues, setLoginFieldValues }: InputFieldProps) => {
  const fieldName = field.name;
  return (
    <label htmlFor={fieldName}>
      <div className="text-xl font-bold my-2">{fieldName}</div>
      <input
        className="block border rounded-md py-1 px-2"
        type={field.type}
        name={fieldName}
        onChange={(event) => setLoginFieldValues(
          { ...loginFieldValues,
            [event.target.name]: event.target.value,
          }
        )}
        required
      />
    </label>
  )
};

export default InputField;
