import { createSlice } from '@reduxjs/toolkit';
import { IPizzaSliceState, Status } from './types';
import { fetchPizzas } from './asyncActions';

const initialState: IPizzaSliceState = {
  items: [],
  page: 1,
  pages: 1,
  status: Status.LOADING, // loading | success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, state => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload.pizzas;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizzas.rejected, state => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export default pizzaSlice.reducer;
