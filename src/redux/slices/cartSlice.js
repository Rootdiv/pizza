import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const calcTotalPrice = items => items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
const calcTotalCount = items => items.reduce((sum, item) => sum + item.count, 0);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      if (findItem.count === 0) {
        state.items = state.items.filter(obj => obj.id !== action.payload);
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    clearItems() {
      return initialState;
    },
  },
});

export const selectCart = state => state.cart;
export const selectCartItemById = id => state => state.cart.items.find(obj => obj.id === id);

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
