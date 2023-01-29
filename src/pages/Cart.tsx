import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CartEmpty, CartItem, Button } from 'components';
import { ReactComponent as CartSvg } from 'assets/img/cart.svg';
import { ReactComponent as TrashSvg } from 'assets/img/trash.svg';

import { selectCart, clearItems } from 'redux/slices/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalCount, totalPrice } = useSelector(selectCart);

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartSvg width={18} height={18} /> Корзина
          </h2>
          <div onClick={onClearCart} className="cart__clear">
            <TrashSvg width={20} height={20} />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items">
          {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} &#8381;</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Вернуться назад</span>
            </Link>
            <Button className="button pay-btn">
              <span>Оплатить сейчас</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
