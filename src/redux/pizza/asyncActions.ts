import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizzas, SearchPizzaParams } from './types';

const URL = import.meta.env.DEV ? 'http://localhost:2010' : 'https://api.rootdiv.ru';

//createAsyncThunk<Pizzas, SearchPizzaParams> - типизация ответа и аргументов функции.
export const fetchPizzas = createAsyncThunk<Pizzas, SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async params => {
    const { sortBy, categoryId, currentPage, search } = params;

    const categorySort = categoryId !== 0 ? `category=${categoryId}&` : '';
    const sortType = sortBy.type.replace('-', '');
    //axios.get<Pizzas> - типизация ответа.
    const { data } = await axios.get<Pizzas>(
      `${URL}/pizzas?page=${currentPage}&limit=4&${categorySort}sortby=${sortType}&order=${sortBy.order}${search}`,
    );

    return data;
  },
);
