import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  searchValue: '',
  currentPage: 1,
  sorts: {
    title: 'популярности',
    type: 'rating',
    order: 'desc',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSorts(state, action) {
      state.sorts = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    // setFilters(state, action) {
    //   if (Object.keys(action.payload).length) {
    //     state.currentPage = Number(action.payload.currentPage);
    //     state.categoryId = Number(action.payload.categoryId);
    //     state.sorts = action.payload.sorts;
    //   } else {
    //     state.currentPage = 1;
    //     state.categoryId = 0;
    //     state.sorts = {
    //       name: 'популярности',
    //       type: 'rating',
    //       order: 'desc',
    //     };
    //   }
    // },
  },
});

export const selectFilter = state => state.filter;
export const selectSorts = state => state.filter.sorts;

export const { setCategoryId, setSorts, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
