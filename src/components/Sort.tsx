import React, { useState, useEffect, useRef } from 'react';

import arrowTopSvg from 'assets/img/arrow-top.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectSorts, setSorts } from 'redux/slices/filterSlice';

type SortItem = { title: string; type: string; order: string };

const sortList: SortItem[] = [
  { title: 'популярности (DESC) ↓', type: 'rating', order: 'desc' },
  { title: 'популярности (ASC) ↑', type: '-rating', order: 'asc' },
  { title: 'цене (DESC) ↓', type: 'price', order: 'desc' },
  { title: 'цене (ASC) ↑', type: '-price', order: 'asc' },
  { title: 'алфавиту (DESC) ↓', type: 'title', order: 'desc' },
  { title: 'алфавиту (ASC) ↑', type: '-title', order: 'asc' },
];

export const Sort: React.FC = () => {
  const dispatch = useDispatch();

  const sort = useSelector(selectSorts);

  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onSelectItem = (obj: SortItem) => {
    dispatch(setSorts(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
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
        <img className={open ? 'rotated' : ''} src={arrowTopSvg} alt="" />
        <b>Сортировка по:</b>
        <span onClick={toggleOpen}>{sort.title}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, index) => (
              <li onClick={() => onSelectItem(obj)} className={sort.type === obj.type ? 'active' : ''} key={index}>
                {obj.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
