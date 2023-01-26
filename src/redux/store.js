import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
    rootReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
