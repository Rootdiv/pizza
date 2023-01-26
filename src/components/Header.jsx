import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from 'redux/slices/cartSlice';

import { Button } from './Button';
import { Search } from './Search';
import logoSvg from 'assets/img/pizza-logo.svg';
import cartSvg from 'assets/img/cart.svg';

export const Header = () => {
  const { totalCount, totalPrice } = useSelector(selectCart);
  const location = useLocation();

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza V2</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        {location.pathname !== '/cart' && <Search />}
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>{totalPrice} &#8381;</span>
              <div className="button__delimiter" />
              <img src={cartSvg} alt="Корзина" />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
