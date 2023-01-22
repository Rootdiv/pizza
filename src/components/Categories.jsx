import React from 'react';
import PropTypes from 'prop-types';

export const Categories = React.memo(({ activeCategory, items, onClickCategory }) => (
  <div className="categories">
    <ul>
      <li className={activeCategory === null ? 'active' : null} onClick={() => onClickCategory(null)}>
        Все
      </li>
      {items.map((title, index) => (
        <li className={activeCategory === index ? 'active' : null} onClick={() => onClickCategory(index)} key={index}>
          {title}
        </li>
      ))}
    </ul>
  </div>
));

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

Categories.displayName = 'Categories';
