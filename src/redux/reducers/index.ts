import { combineReducers } from 'redux';
import user from './user';
import classes from './classes';
import students from './students';

export default combineReducers(
  {
    user,
    classes,
    students,
  }
);
