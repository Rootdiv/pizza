import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button } from '../Button';

export const PizzaBlock = ({ id, title, imageUrl, price, types, sizes, onClickAddPizza, addedCount }) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onSelectType = index => {
    setActiveType(index);
  };

  const onSelectSize = size => {
    setActiveSize(size);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      title,
      imageUrl,
      price,
      size: activeSize,
      type: availableTypes[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {availableTypes.map((type, index) => (
              <li
                key={type}
                onClick={() => onSelectType(index)}
                className={clsx({ active: activeType === index, disabled: !types.includes(index) })}>
                {type}
              </li>
            ))}
          </ul>
          <ul>
            {availableSizes.map(size => (
              <li
                key={size}
                onClick={() => onSelectSize(size)}
                className={clsx({ active: activeSize === size, disabled: !sizes.includes(size) })}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <Button onClick={onAddPizza} className="button--add" outline>
            <svg width="10" height="10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" />
              <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" />
            </svg>
            <span>Добавить</span>
            {addedCount && <span className="count">{addedCount}</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

PizzaBlock.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onClickAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  title: '---',
  price: 0,
  types: [],
  sizes: [],
};
