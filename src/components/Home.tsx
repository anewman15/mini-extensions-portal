import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClassCard from './ClassCard';
import saveUser from '../redux/actions/saveUser';
import { StoreStateType } from '../redux/store/store';
import { Record, FieldSet } from 'airtable';
import { Portal } from '../data/PortalsData';
import _ from 'lodash';
import { loadStoreFromLocalStorage } from '../redux/store/persist';
import portalDataAction from '../redux/actions/portalDataAction';
type HomePropType = {
  portal: Portal,
}

const Home = ({ portal }: HomePropType) => {
  const inverseTableData = _.camelCase(portal.inverseLinkedRecordFieldInUsersTable);
  // const linkedTableData = _.camelCase(portal.fieldsToDisplay[1].name);

  const user = useSelector((state: StoreStateType) => state.user);
  // const data = useSelector((state: StoreStateType) => state[portal.id]);
  const dispatch = useDispatch();
  const currentState = loadStoreFromLocalStorage();
  const inverseTableItems = currentState[portal.id][inverseTableData];
  // const linkedTableItems = currentState[portal.id][linkedTableData]
  const savePortalData = portalDataAction(portal);


  const logOut = () => {
    dispatch(saveUser({}));
    dispatch(savePortalData({}));
  }

  console.log(currentState[portal.id]);
  console.log(inverseTableData);

  return (
    <div className="relative container mx-auto my-6 p-4 w-10/12 md:w-8/12">
      <div className="absolute top-0 right-8">
        <button
          className="bg-red-400 my-2 px-3 py-1 rounded-md text-gray-100"
          type="button"
          onClick={logOut}
        >
          Log out
        </button>
      </div>
      <h2 className="text-green-800 text-center text-4xl font-extrabold">{ user.fields && user.fields.Name }</h2>
      <div>
        {/* { inverseTableItems.map((cl: Record<FieldSet>) => (
          <div>{cl.fields.Name}</div>
        ))} */}
      </div>
    </div>
  );
};

export default Home;
