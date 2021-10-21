type StudentsActionType = {
  type: 'SAVE_STUDENTS',
  payload: {
    studentsData: any
  }
};


const students = (state = [], action: StudentsActionType) => {
  switch (action.type) {
    case 'SAVE_STUDENTS': {
      return action.payload.studentsData
    }
    default: {
      return state;
    }
  }
};

export default students;
