import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getLinkedTableData, getInverseTableData, getUser } from '../sandbox/airtable';
import createStudentsArray from '../utils/createStudentsArray';
import createStudentsHash from '../utils/createStudentsHash';
import filterString from '../utils/filterString';
import saveUser from '../redux/actions/saveUser';
import saveClasses from '../redux/actions/saveClasses';
import saveStudents from '../redux/actions/saveStudents';
import ErrorBox from '../components/ErrorBox';
import { Record, Records, FieldSet } from 'airtable';
import InputField from './InputField';
import { portals, Portal, AirtableField } from '../data/PortalsData';

export type LoginFieldValuesType = {
  [key:string]: string,
};

type LoginPropsType = {
  portal: Portal,
};

const Login = ({ portal }: LoginPropsType) => {
  const initialFieldsState: LoginFieldValuesType = {
    name: '',
  };

  const [loginFieldValues, setLoginFieldValues] = useState<LoginFieldValuesType>(initialFieldsState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);

    try {
      let userResponse = await getUser(portal, loginFieldValues);
      let userData: Record<FieldSet> | any = null;
      if (!userResponse.length) {
        throw new Error('User Not Found.');
      } else {
        userData = userResponse[0];
        dispatch(saveUser(userData));
      };

      const inverseFilterString = filterString(userData.fields.Classes);

      let inverseTableResponse = await getInverseTableData(portal, inverseFilterString);

      const linkedTableIds = createStudentsArray(inverseTableResponse);
      const linkedTableFilterString = filterString(linkedTableIds);

      let linkedTableResponse: Records<FieldSet> = await getLinkedTableData(portal, linkedTableFilterString)
      const studentsHash = createStudentsHash(linkedTableResponse);

      dispatch(saveClasses(inverseTableResponse));
      dispatch(saveStudents(studentsHash));

      setLoading(false);
      setError(null);
      history.push('/');

    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  console.log(loginFieldValues);

  return (
    <div className="container mx-auto my-4 flex flex-col items-center">
      <form onSubmit={handleLogin} className="mx-4">
        {
          portal.loginFields.map((field: AirtableField): ReactElement => (
            <InputField key={field.name} field={field} loginFieldValues={loginFieldValues} setLoginFieldValues={setLoginFieldValues} />
          ))
        }
        <button
          type="submit"
          className="bg-green-700 py-1 px-4 my-5 border rounded-md text-gray-100"
          >
          { loading ? 'Loading...' : 'Log in' }
        </button>
      </form>
      { error && <ErrorBox error={error} /> }
    </div>
  );
};

export default Login;
