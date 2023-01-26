import { configureStore } from '@reduxjs/toolkit';

import pizzas from './reducers/pizzas';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
});
