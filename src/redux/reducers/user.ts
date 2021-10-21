type UserActionType = {
  type: 'SAVE_USER',
  payload: {
    userData: any
  }
};

const user = (state = {}, action: UserActionType) => {
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
