import { CartItemType } from 'redux/cart/types';

export const calcTotalCount = (items: CartItemType[]) => items.reduce((sum, item) => sum + item.count, 0);
