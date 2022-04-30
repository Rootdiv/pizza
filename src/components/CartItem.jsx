import React from 'react';
import Button from './Button';

const CardItem = ({ id, name, type, size, totalPrice, totalCount, onRemove, onPlus, onMinus }) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>{type} тесто, {size} см.</p>
      </div>
      <div className="cart__item-count">
        <Button onClick={handleMinusItem} className="button--circle cart__item-count-minus" outline>
          <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
            <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
          </svg>
        </Button>
        <b>{totalCount}</b>
        <Button onClick={handlePlusItem} className="button--circle cart__item-count-plus" outline>
          <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
            <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
          </svg>
        </Button>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} ₽</b>
      </div>
      <div className="cart__item-remove">
        <Button onClick={handleRemoveClick} className="button--circle" outline>
          <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" fill="#EB5A1E" />
            <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" fill="#EB5A1E" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
