import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSliceState, SortItem, SortTypeEnum } from './types';

const initialState: IFilterSliceState = {
  categoryId: 0,
  searchValue: '',
  currentPage: 1,
  sorts: {
    title: 'популярности',
    type: SortTypeEnum.RATING_DESC,
    order: 'desc',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSorts(state, action: PayloadAction<SortItem>) {
      state.sorts = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryId, setSorts, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
