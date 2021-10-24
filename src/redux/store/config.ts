import { AnyAction, combineReducers, createStore, Reducer, ReducersMapObject, Store } from 'redux';
import user from '../reducers/user';

const staticReducers = {
  user,
};

const createReducer = (asyncReducers: ReducersMapObject) => {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
};

export const configureStore: any = (initialState: ReducersMapObject) => {
  const store = createStore(createReducer({}), initialState)

  store.asyncReducers = {};

  store.injectReducer = (key: string, asyncReducer: Reducer<Store, AnyAction>) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
};
