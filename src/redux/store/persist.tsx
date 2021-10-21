import { StoreStateType } from "./store";

const saveStoreToLocaStorage = (state: StoreStateType) => {
  try {
    const miniExtension = JSON.stringify(state);
    localStorage.setItem('miniExtension', miniExtension);
    return miniExtension;
  } catch (e) {
    return e;
  }
};

const loadStoreFromLocalStorage = () => {
  try {
    const storedMiniExtension = localStorage.getItem('miniExtension');
    const storedVal = storedMiniExtension ? JSON.parse(storedMiniExtension) : undefined;
    return storedVal;
  } catch (e) {
    return undefined;
  }
};

export { saveStoreToLocaStorage, loadStoreFromLocalStorage };