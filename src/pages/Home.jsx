import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, Skeleton } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { title: 'популярности', type: 'popular', order: 'desc' },
  { title: 'цене', type: 'price', order: 'desc' },
  { title: 'алфавиту', type: 'title', order: 'asc' },
];

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
    window.scrollTo(0, 0);
  }, [dispatch, category, sortBy]);

  const onSelectCategory = useCallback(
    index => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortType = useCallback(
    type => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj));
  };

  const pizzas = items.map(obj => (
    <PizzaBlock
      onClickAddPizza={handleAddPizzaToCart}
      key={obj.id}
      addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
      {...obj}
    />
  ));
  const skeletons = [...new Array(12)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoaded ? pizzas : skeletons}</div>
    </div>
  );
};

export default Home;
