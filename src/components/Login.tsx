import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { allStudentsResponse, getClasses, getUser } from '../sandbox/airtable';
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

  const [loginFieldValues, setLoginFieldValues] = useState(initialFieldsState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);

    let classesFilterString = ''
    let studentsFilterString = ''

    // try {
    //   let userResponse = await getUser(username);
    //   let userData: Record<FieldSet> | any = null;
    //   if (!userResponse.length) {
    //     throw new Error('User Not Found.');
    //   } else {
    //     userData = userResponse[0];
    //     dispatch(saveUser(userData));
    //   };

    //   classesFilterString = filterString(userData.fields.Classes);

    //   let classesTableResponse = await getClasses(classesFilterString);
    //   dispatch(saveClasses(classesTableResponse));

    //   const studentIds = createStudentsArray(classesTableResponse);
    //   studentsFilterString = filterString(studentIds);

    //   let allPeers: Records<FieldSet> = await allStudentsResponse(studentsFilterString)
    //   const studentsHash = createStudentsHash(allPeers);
    //   dispatch(saveStudents(studentsHash));

    //   setLoading(false);
    //   setError(null);
    //   history.push('/');

    // } catch (e: any) {
    //   setError(e.message);
    //   setLoading(false);
    // }
  };

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
