import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import arrowTopSvg from '../assets/img/arrow-top.svg';

const SortPopup = React.memo(({ items, activeSortType, onClickSortType }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeLabel = items.find(obj => obj.type === activeSortType).name;
  const sortRef = useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = event => {
    const target = event.target;
    if (!sortRef.current.contains(target)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = obj => {
    onClickSortType(obj);
    setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
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
                key={`${obj.type}_${index}`}>
                {obj.name}
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
  onClickSortType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
  items: [],
};

SortPopup.displayName = 'SortPopup';

export default SortPopup;
