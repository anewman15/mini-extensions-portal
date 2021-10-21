import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClassCard from './ClassCard';
import saveUser from '../redux/actions/saveUser';
import saveClasses from '../redux/actions/saveClasses';
import saveStudents from '../redux/actions/saveStudents';
import { StoreStateType } from '../redux/store/store';
import { Record, FieldSet } from 'airtable';

const Home = () => {
  const user = useSelector((state: StoreStateType) => state.user);
  const classes = useSelector((state: StoreStateType) => state.classes);
  const students = useSelector((state: StoreStateType) => state.students);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(saveUser({}));
    dispatch(saveClasses([]));
    dispatch(saveStudents({}));
  }

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
        { classes.map((cl: Record<FieldSet>) => (
          <ClassCard key={cl.id} cl={cl} students={students} />
        ))}
      </div>
    </div>
  );
};

export default Home;
