const initialState = {
  categoryId: 0,
  sortBy: {
    type: 'rating',
    order: 'desc',
  },
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      categoryId: action.payload,
    };
  }
  return state;
};

export default filters;
