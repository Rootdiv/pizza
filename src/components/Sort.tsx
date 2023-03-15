import React, { useState, useEffect, useRef } from 'react';

import arrowTopSvg from '@/assets/img/arrow-top.svg';
import { useDispatch } from 'react-redux';
import { setSorts } from '@/redux/filter/slice';
import { SortItem, SortTypeEnum } from '@/redux/filter/types';

type SortProps = {
  sort: SortItem;
};

const sortList: SortItem[] = [
  { title: 'популярности (DESC) ↓', type: SortTypeEnum.RATING_DESC, order: 'desc' },
  { title: 'популярности (ASC) ↑', type: SortTypeEnum.RATING_ASC, order: 'asc' },
  { title: 'цене (DESC) ↓', type: SortTypeEnum.PRICE_DESC, order: 'desc' },
  { title: 'цене (ASC) ↑', type: SortTypeEnum.PRICE_ASC, order: 'asc' },
  { title: 'алфавиту (DESC) ↓', type: SortTypeEnum.TITLE_DESC, order: 'desc' },
  { title: 'алфавиту (ASC) ↑', type: SortTypeEnum.TITLE_ASC, order: 'asc' },
];

export const Sort: React.FC<SortProps> = React.memo(({ sort }) => {
  const dispatch = useDispatch();

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
              <li
                key={index}
                onClick={() => onSelectItem(obj)}
                className={sort.type === obj.type ? 'active' : undefined}>
                {obj.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

Sort.displayName = 'Sort';
