import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filter from './filter/slice';
import cart from './cart/slice';
import pizza from './pizza/slice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

//Получаем тип стейта
export type RootState = ReturnType<typeof store.getState>;
//Получаем тип dispatch
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
