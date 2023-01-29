import React from 'react';

type CategoriesProps = {
  activeCategory: number;
  onChangeCategory: (index: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = ({ activeCategory, onChangeCategory }) => (
  <div className="categories">
    <ul>
      {categories.map((title, index) => (
        <li className={activeCategory === index ? 'active' : ''} onClick={() => onChangeCategory(index)} key={index}>
          {title}
        </li>
      ))}
    </ul>
  </div>
);
