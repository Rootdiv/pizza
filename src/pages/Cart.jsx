import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CartItem, Button } from '../components';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';
import cartSvg from '../assets/img/cart.svg';
import trashSvg from '../assets/img/trash.svg';
import cartEmptyImage from '../assets/img/empty-cart.png';

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map(key => items[key].items[0]);

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = id => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = id => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = id => {
    dispatch(minusCartItem(id));
  };

  const onClickOrder = () => {
    console.log('Ваш заказ', items);
  };

  return (
    <div className="container container--cart">
      {totalCount ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <img src={cartSvg} alt="" /> Корзина
            </h2>
            <div onClick={onClearCart} className="cart__clear">
              <img src={trashSvg} alt="" />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="content__items">
            {addedPizzas.map(obj => (
              <CartItem
                id={obj.id}
                key={obj.id}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link to='/' className="button button--outline button--add go-back-btn">
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
              <Button onClick={onClickOrder} className="button pay-btn">
                <span>Оплатить сейчас</span>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <i>😕</i>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={cartEmptyImage} alt="Козина пустая" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
