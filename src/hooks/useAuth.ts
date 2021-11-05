import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Portal } from '../data/PortalsData';
import { StoreStateType } from '../redux/store/store';
import { getUser } from '../sandbox/airtable';
import { FieldSet, Record } from 'airtable';
import fieldsValueValidator from '../utils/fieldsValueValidator';
import createApiFieldValues from '../utils/createApiFieldValues';

const useAuth = (portal: Portal) => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);
  const user = useSelector((state: StoreStateType) => state.user);

  const getUserValidationData = async () => {
    let userData: Record<FieldSet> | any = null;
    let noUser = null;

    let userResponse = await getUser(portal, user.login);

    if (!userResponse.length) {
      noUser = true;
    } else {
      userData = userResponse[0];
    };

    return { userData, noUser };
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      getUserValidationData()
        .then((response) => {
          console.log(response);
          const { userData, noUser } = response;
          if (noUser) {
            setAuthenticated(false)
          } else {
            const apiFieldValues = createApiFieldValues(portal, userData);
              setAuthenticated(fieldsValueValidator(user.login, apiFieldValues));
          };
        })
        .catch((e: any) => {
          setError(e);
        });
    };

    return () => {
      isCancelled = true;
    };

  }, []);

  return (
    [authenticated, error]
  );
};

export default useAuth;