import { Record, Records, FieldSet } from 'airtable';
import { createStore } from 'redux';
import combinedReducer from '../reducers';
import { loadStoreFromLocalStorage, saveStoreToLocaStorage } from './persist';

type initialStateType = {
  user: Record<FieldSet> | {},
  classes: Records<FieldSet> | [],
  students: {
    [key: string]: string
  } | {}
};

const initialState: initialStateType = loadStoreFromLocalStorage();

export const store = createStore(
  combinedReducer,
  initialState,
);

store.subscribe(() => saveStoreToLocaStorage(store.getState()));

export type StoreStateType = ReturnType<typeof store.getState>
