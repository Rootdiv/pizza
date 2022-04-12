import React from 'react';

import { Categories, SortPopup, PizzaBlock } from '../components';

const Home = ({ items }) => (
  <div className="container">
    <div className="content__top">
      <Categories
        onClickItem={name => console.log(name)}
        items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
      />
      <SortPopup
        items={[
          { name: 'популярности', type: 'popular' },
          { name: 'цене', type: 'price' },
          { name: 'алфавиту', type: 'alphabet' },
        ]}
      />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {items.map(obj => (
        <PizzaBlock key={obj.id} {...obj} />
      ))}
    </div>
  </div>
);

export default Home;
