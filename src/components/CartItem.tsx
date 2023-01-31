import React from 'react';
import { Button } from './Button';
import { useDispatch } from 'react-redux';

import { addItem, CartItemType, minusItem, removeItem } from 'redux/slices/cartSlice';

type CartItemProps = {
  id: number;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({ id, title, type, size, price, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItemType));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <Button disabled={count === 1} onClick={onClickMinus} className="button--circle cart__item-count-minus" outline>
          <svg width="10" height="10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" />
            <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" />
          </svg>
        </Button>
        <b>{count}</b>
        <Button onClick={onClickPlus} className="button--circle cart__item-count-plus" outline>
          <svg width="10" height="10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" />
            <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" />
          </svg>
        </Button>
      </div>
      <div className="cart__item-price">
        <b>{price * count} &#8381;</b>
      </div>
      <div className="cart__item-remove">
        <Button onClick={onClickRemove} className="button--circle" outline>
          <svg width="10" height="10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" />
            <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" />
          </svg>
        </Button>
      </div>
    </div>
  );
};
