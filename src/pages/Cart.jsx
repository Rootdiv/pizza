import React from 'react';

import cartSvg from '../assets/img/cart.svg';
import trashSvg from '../assets/img/trash.svg';

const Cart = () => (
  <div className="container container--cart">
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <img src={cartSvg} alt="" /> Корзина
        </h2>
        <div className="cart__clear">
          <img src={trashSvg} alt="" />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className="content__items">
        <div className="cart__item">
          <div className="cart__item-img">
            <img
              className="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div className="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div className="cart__item-count">
            <div className="button button--outline button--circle cart__item-count-minus">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
            <b>2</b>
            <div className="button button--outline button--circle cart__item-count-plus">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
          </div>
          <div className="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div className="cart__item-remove">
            <div className="button button--outline button--circle">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
          </div>
        </div>
        <div className="cart__item">
          <div className="cart__item-img">
            <img
              className="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div className="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div className="cart__item-count">
            <div className="button button--outline button--circle cart__item-count-minus">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
            <b>2</b>
            <div className="button button--outline button--circle cart__item-count-plus">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
          </div>
          <div className="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div className="cart__item-remove">
            <div className="button button--outline button--circle">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
          </div>
        </div>
        <div className="cart__item">
          <div className="cart__item-img">
            <img
              className="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div className="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div className="cart__item-count">
            <div className="button button--outline button--circle cart__item-count-minus">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
            <b>2</b>
            <div className="button button--outline button--circle cart__item-count-plus">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
          </div>
          <div className="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div className="cart__item-remove">
            <div className="button button--outline button--circle">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
          </div>
        </div>
        <div className="cart__item">
          <div className="cart__item-img">
            <img
              className="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div className="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div className="cart__item-count">
            <div className="button button--outline button--circle cart__item-count-minus">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
            <b>2</b>
            <div className="button button--outline button--circle cart__item-count-plus">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
          </div>
          <div className="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div className="cart__item-remove">
            <div className="button button--outline button--circle">
              <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
                <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
              Всего пицц: <b>3 шт.</b>
          </span>
          <span>
              Сумма заказа: <b>900 ₽</b>
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <a href="/" className="button button--outline button--add go-back-btn">
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
          </a>
          <div className="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cart;
