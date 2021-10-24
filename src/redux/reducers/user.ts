import { AnyAction } from "redux";

const user = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case 'SAVE_USER': {
      return action.payload.userData
    }
    default: {
      return state;
    }
  }
};

export default user;
