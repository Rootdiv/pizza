import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import filter from './filter/slice';
import cart from './cart/slice';
import pizza from './pizza/slice';

const persistConfig = {
  key: 'pizza-cart-react',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cart);

export const store = configureStore({
  reducer: {
    filter,
    cart: persistedReducer,
    pizza,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persist = persistStore(store);

//Получаем тип стейта
export type RootState = ReturnType<typeof store.getState>;
//Получаем тип dispatch
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
