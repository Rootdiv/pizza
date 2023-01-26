import React, { useState, useEffect, useRef } from 'react';

import arrowTopSvg from 'assets/img/arrow-top.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSorts } from 'redux/slices/filterSlice';

const sortItems = [
  { title: 'популярности (DESC) ↓', type: 'rating', order: 'desc' },
  { title: 'популярности (ASC) ↑', type: '-rating', order: 'asc' },
  { title: 'цене (DESC) ↓', type: 'price', order: 'desc' },
  { title: 'цене (ASC) ↑', type: '-price', order: 'asc' },
  { title: 'алфавиту (DESC) ↓', type: 'title', order: 'desc' },
  { title: 'алфавиту (ASC) ↑', type: '-title', order: 'asc' },
];

export const Sort = () => {
  const dispatch = useDispatch();

  const sort = useSelector(state => state.filter.sorts);

  const [open, setOpen] = useState(false);
  const sortRef = useRef();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onSelectItem = obj => {
    dispatch(setSorts(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img className={open ? 'rotated' : null} src={arrowTopSvg} alt="" />
        <b>Сортировка по:</b>
        <span onClick={toggleOpen}>{sort.title}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortItems.map((obj, index) => (
              <li onClick={() => onSelectItem(obj)} className={sort.type === obj.type ? 'active' : null} key={index}>
                {obj.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
