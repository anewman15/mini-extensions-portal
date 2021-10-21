type ClassesActionType = {
  type: 'SAVE_CLASSES',
  payload: {
    classesData: any
  }
};

const classes = (state = [], action: ClassesActionType) => {
  switch (action.type) {
    case 'SAVE_CLASSES': {
      return action.payload.classesData
    }
    default: {
      return state;
    }
  }
};

export default classes;
