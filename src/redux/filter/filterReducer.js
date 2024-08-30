const INITIAL_STATE = {
  filterValue: '',
};

export const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'filter/setFilterValue': {
      return {
        ...state,
        filterValue: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setFilterValue = payload => {
  return {
    type: 'filter/setFilterValue',
    payload: payload,
  };
};