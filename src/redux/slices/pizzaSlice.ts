import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

const URL = `${window.location.protocol}//${window.location.hostname}:2010`;

type SortBy = {
  type: string;
  order: string;
};

type SearchPizzaParams = {
  sortBy: SortBy;
  categoryId: number;
  search: string;
  currentPage: number;
};

type PizzaItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

type Pizzas = {
  pizzas: PizzaItem[];
  page: number;
  pages: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

interface IPizzaSliceState {
  items: PizzaItem[];
  page: number;
  pages: number;
  status: Status;
}

const initialState: IPizzaSliceState = {
  items: [],
  page: 1,
  pages: 1,
  status: Status.LOADING, // loading | success | error
};

//createAsyncThunk<Pizzas, SearchPizzaParams> - типизация ответа и аргументов функции.
export const fetchPizzas = createAsyncThunk<Pizzas, SearchPizzaParams>('pizza/fetchPizzasStatus', async params => {
  const { sortBy, categoryId, currentPage, search } = params;

  const categorySort = categoryId !== 0 ? `category=${categoryId}&` : '';
  const sortType = sortBy.type.replace('-', '');
  //axios.get<Pizzas> - типизация ответа.
  const { data } = await axios.get<Pizzas>(
    `${URL}/pizzas?page=${currentPage}&limit=4&${categorySort}sortby=${sortType}&order=${sortBy.order}${search}`,
  );

  return data;
});

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

export const selectPizzaData = (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
