import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, Sort, PizzaBlock, Skeleton } from 'components';

import { setCategoryId, setCurrentPage } from 'redux/slices/filterSlice';
import { fetchPizzas } from 'redux/actions/pizzas';
import { Pagination } from 'components/Pagination';

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.pizzas.items);
  const pages = useSelector(state => state.pizzas.pages);
  const isLoaded = useSelector(state => state.pizzas.isLoaded);
  const { categoryId, sorts: sortBy, currentPage } = useSelector(state => state.filter);

  const onChangePage = number => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    dispatch(fetchPizzas(currentPage, categoryId, sortBy));
  }, [categoryId, currentPage, dispatch, sortBy]);

  const onChangeCategory = id => {
    dispatch(setCategoryId(id));
  };

  const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoaded ? pizzas : skeletons}</div>
      <Pagination pageCount={pages} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
