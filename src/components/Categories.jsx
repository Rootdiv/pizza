import React from 'react';
import PropTypes from 'prop-types';

export const Categories = React.memo(({ activeCategory, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((title, index) => (
          <li
            className={activeCategory === index ? 'active' : null}
            onClick={() => onChangeCategory(index)}
            key={index}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

Categories.displayName = 'Categories';
