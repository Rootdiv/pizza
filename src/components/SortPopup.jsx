import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import arrowTopSvg from 'assets/img/arrow-top.svg';

export const SortPopup = React.memo(({ items, activeSortType, onChangeSort }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeLabel = items.find(obj => obj.type === activeSortType).title;
  const sortRef = useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = obj => {
    onChangeSort(obj);
    setVisiblePopup(false);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(sortRef.current)) {
        setVisiblePopup(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img className={visiblePopup ? 'rotated' : null} src={arrowTopSvg} alt="" />
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items.map((obj, index) => (
              <li
                onClick={() => onSelectItem(obj)}
                className={activeSortType === obj.type ? 'active' : null}
                key={index}>
                {obj.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
  items: [],
};

SortPopup.displayName = 'SortPopup';
