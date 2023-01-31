import { RootState } from 'redux/store';

export const selectFilter = (state: RootState) => state.filter;
export const selectSorts = (state: RootState) => state.filter.sorts;
