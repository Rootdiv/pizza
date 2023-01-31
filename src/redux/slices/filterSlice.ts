import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortTypeEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

type Sort = {
  title: string;
  type: SortTypeEnum;
  order: string;
};

interface IFilterSliceState {
  categoryId: number;
  searchValue: string;
  currentPage: number;
  sorts: Sort;
}

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
    setSorts(state, action: PayloadAction<Sort>) {
      state.sorts = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    // setFilters(state, action: PayloadAction<IFilterSliceState>) {
    //   if (Object.keys(action.payload).length) {
    //     state.currentPage = Number(action.payload.currentPage);
    //     state.categoryId = Number(action.payload.categoryId);
    //     state.sorts = action.payload.sorts;
    //   } else {
    //     state.currentPage = 1;
    //     state.categoryId = 0;
    //     state.sorts = {
    //       title: 'популярности',
    //       type: SortTypeEnum.RATING_DESC,
    //       order: 'desc',
    //     };
    //   }
    // },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSorts = (state: RootState) => state.filter.sorts;

export const { setCategoryId, setSorts, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
