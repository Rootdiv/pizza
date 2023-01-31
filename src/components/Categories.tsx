import React from 'react';

type CategoriesProps = {
  activeCategory: number;
  onChangeCategory: (index: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ activeCategory, onChangeCategory }) => (
  <div className="categories">
    <ul>
      {categories.map((title, index) => (
        <li
          //Передаём undefined чтобы не создавался пустой класс
          className={activeCategory === index ? 'active' : undefined}
          onClick={() => onChangeCategory(index)}
          key={index}>
          {title}
        </li>
      ))}
    </ul>
  </div>
));

Categories.displayName = 'Categories';
