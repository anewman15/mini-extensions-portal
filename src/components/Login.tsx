import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getLinkedTableData, getInverseTableData, getUser } from '../sandbox/airtable';
import createLinkedRecordsIdsArray from '../utils/createLinkedRecordsIdsArray';
import filterString from '../utils/filterString';
import ErrorBox from '../components/ErrorBox';
import { Record, Records, FieldSet } from 'airtable';
import InputField from './InputField';
import { Portal, AirtableField } from '../data/PortalsData';
import _ from 'lodash';
import saveUser from '../redux/actions/saveUser';
import { store } from '../redux/store/store';
import portalDataReducer from '../redux/reducers/portalDataReducer';
import portalDataAction from '../redux/actions/portalDataAction';
import fieldsValueValidator from '../utils/fieldsValueValidator';
import createApiFieldValues from '../utils/createApiFieldValues';

export type LoginFieldValuesType = {
  [key: string]: string,
};

export type DataFetchStatusType = {
  loading?: boolean,
  error?: string | null
}

export type PortalDataType = {
  [key: string]: Records<FieldSet> | [],
}

type LoginPropsType = {
  portal: Portal,
};

const Login = ({ portal }: LoginPropsType) => {
  // const inverseTableName = _.camelCase(portal.inverseLinkedRecordFieldInUsersTable);
  // const linkedTableName = portal.fieldsToDisplay[1].name.toLowerCase();

  // const initialFieldsState: LoginFieldValuesType = {
  //   name: '',
  // };

  const [loginFieldValues, setLoginFieldValues] = useState<LoginFieldValuesType>({});

  const [dataFetchStatus, setDataFetchStatus] = useState<DataFetchStatusType>({});
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setDataFetchStatus({ loading: true });

    try {
      let userResponse = await getUser(portal, loginFieldValues);
      let userData: Record<FieldSet> | any = null;

      if (!userResponse.length) {
        throw new Error('User Not Found.');
      } else {
        userData = userResponse[0];
      };

      const userInfo = {
        login: {
          authenticated: true,
          ...loginFieldValues
        },
        data: userData,
      };

      const apiFieldValues = createApiFieldValues(portal, userData);
      const fieldsValidated = fieldsValueValidator(loginFieldValues, apiFieldValues);
        if (fieldsValidated) {
          dispatch(saveUser(userInfo));
          setDataFetchStatus({});
        } else {
          throw new Error('Password mismatch. Please enter the correct password.');
        }
      // } else {
      //   dispatch(saveUser(userInfo));
      //   setDataFetchStatus({})
      // };
      // const inverseFilterString = filterString(userData.fields[portal.inverseLinkedRecordFieldInUsersTable]);

      // let inverseTableResponse = await getInverseTableData(portal, inverseFilterString);

      // const linkedTableIds = createLinkedRecordsIdsArray(portal, inverseTableResponse);
      // const linkedTableFilterString = filterString(linkedTableIds);

      // let linkedTableResponse: Records<FieldSet> = await getLinkedTableData(portal, linkedTableFilterString)


      // const portalData = {
      //   user: userData,
      //   [inverseTableName]: inverseTableResponse,
      //   [linkedTableName]: linkedTableResponse,
      // };

      // const portalReducer = portalDataReducer(portal);
      // store.injectReducer(portal.id, portalReducer);

      // const savePortalData = portalDataAction(portal);

      // dispatch(savePortalData(portalData));
      setLoginFieldValues({});
      history.push(`/portals/${portal.id}`);

    } catch (e: any) {
      setDataFetchStatus({ error: e.message });
    }
  };

  console.log(Object.keys(loginFieldValues));

  return (
    <div className="container mx-auto my-4 flex flex-col items-center">
      <h2 className="my-4 mx-auto py-4 px-8 text-2xl text-green-800 text-center font-bold">{`Log in to Portal ${portal.id.toUpperCase()}`}</h2>
      <form onSubmit={handleLogin} className="mx-4 px-8 py-4 bg-gray-100 rounded">
        {
          portal.loginFields.map((field: AirtableField): ReactElement => (
            <InputField key={field.name} field={field} loginFieldValues={loginFieldValues} setLoginFieldValues={setLoginFieldValues} />
          ))
        }
        <button
          type="submit"
          className="bg-green-700 py-1 px-4 my-5 border rounded-md text-gray-100"
          >
          { dataFetchStatus.loading ? 'Loading...' : 'Log in' }
        </button>
      </form>
      { dataFetchStatus.error && <ErrorBox error={dataFetchStatus.error} /> }
    </div>
  );
};

export default Login;
