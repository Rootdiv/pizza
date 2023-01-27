import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//const URL = 'https://63cecf0ad2e8c29a9bdf490d.mockapi.io';
const URL = `${window.location.protocol}//${window.location.hostname}:2010`;

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async params => {
  const { sortBy, categoryId, currentPage, search } = params;

  const categorySort = categoryId !== 0 ? `category=${categoryId}&` : '';
  const sortType = sortBy.type.replace('-', '');

  const { data } = await axios.get(
    `${URL}/pizzas?page=${currentPage}&limit=4&${categorySort}sortby=${sortType}&order=${sortBy.order}${search}`,
  );

  return data;
});

const initialState = {
  items: [],
  page: 1,
  pages: 1,
  status: 'loading', // loading | success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPizzas.pending, state => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload.pizzas;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.status = 'success';
      })
      .addCase(fetchPizzas.rejected, state => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const selectPizzaData = state => state.pizza;

export default pizzaSlice.reducer;
