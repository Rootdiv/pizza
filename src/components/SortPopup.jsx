import React, { useState, useEffect, useRef } from 'react';

import arrowTopSvg from '../assets/img/arrow-top.svg';

const SortPopup = ({ items = [] }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortRef = useRef();
  const activeLabel = items[activeItem];

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = event => {
    const target = event.target;
    if (!sortRef.current.contains(target)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = index => {
    setActiveItem(index);
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
            {items.map((name, index) => (
              <li
                onClick={() => onSelectItem(index)}
                className={activeItem === index ? 'active' : null}
                key={`${name}_${index}`}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
