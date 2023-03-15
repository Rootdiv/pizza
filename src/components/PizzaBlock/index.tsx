import React, { useState } from 'react';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById } from '@/redux/cart/selectors';
import { CartItemType } from '@/redux/cart/types';
import { addItem } from '@/redux/cart/slice';

const typeNames = ['тонкое', 'традиционное'];
const availableSizes = [26, 30, 40];

type PizzaBlockProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, title, imageUrl, price, types, sizes }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const addedCount = cartItem ? cartItem.count : 0;

  const onSelectType = (index: number) => {
    setActiveType(index);
  };

  const onSelectSize = (size: number) => {
    setActiveSize(size);
  };

  const onAddPizza = () => {
    const obj: CartItemType = {
      id,
      title,
      imageUrl,
      price,
      size: activeSize,
      type: typeNames[activeType],
      count: 0,
    };
    dispatch(addItem(obj));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {typeNames.map((type, index) => (
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
          <div className="pizza-block__price">от {price} &#8381;</div>
          <Button onClick={onAddPizza} className="button--add" outline>
            <svg width="10" height="10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.92 3.84v4.8a.96.96 0 0 1-1.92 0V.96a.96.96 0 0 1 1.92 0v2.88Z" />
              <path d="M5.76 5.92H.96A.96.96 0 0 1 .96 4h7.68a.96.96 0 0 1 0 1.92H5.76Z" />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <span className="count">{addedCount}</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};
