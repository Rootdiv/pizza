import { CartItemType } from '@/redux/cart/types';

export const calcTotalPrice = (items: CartItemType[]) => items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
