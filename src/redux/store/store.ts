import { Record, FieldSet } from 'airtable';
import { configureStore } from './config';
import { loadStoreFromLocalStorage, saveStoreToLocaStorage } from './persist';

export type initialStateType = {
  user: Record<FieldSet> | {},
};

const initialState: initialStateType = loadStoreFromLocalStorage();

export const store = configureStore(initialState);

store.subscribe(() => saveStoreToLocaStorage(store.getState()));

export type StoreStateType = ReturnType<typeof store.getState>
