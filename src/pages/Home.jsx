import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, Skeleton } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { title: 'популярности (DESC) ↓', type: 'rating', order: 'desc' },
  { title: 'популярности (ASC) ↑', type: '-rating', order: 'asc' },
  { title: 'цене (DESC) ↓', type: 'price', order: 'desc' },
  { title: 'цене (ASC) ↑', type: '-price', order: 'asc' },
  { title: 'алфавиту (DESC) ↓', type: 'title', order: 'desc' },
  { title: 'алфавиту (ASC) ↑', type: '-title', order: 'asc' },
];

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { categoryId, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(categoryId, sortBy));
    window.scrollTo(0, 0);
  }, [dispatch, categoryId, sortBy]);

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
        <Categories activeCategory={categoryId} onChangeCategory={onSelectCategory} items={categoryNames} />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onChangeSort={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoaded ? pizzas : skeletons}</div>
    </div>
  );
};

export default Home;
