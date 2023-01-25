export const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order },
});

export const setCategory = catIndex => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});

export const setSearchValue = searchValue => ({
  type: 'SET_SEARCH_VALUE',
  payload: searchValue,
});

export const setCurrentPage = page => ({
  type: 'SET_CURRENT_PAGE',
  payload: page,
});
