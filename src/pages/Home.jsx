import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, Sort, PizzaBlock, Skeleton } from 'components';
import { Pagination } from 'components/Pagination';

import { selectFilter, setCategoryId, setCurrentPage } from 'redux/slices/filterSlice';
import { selectPizzaData, fetchPizzas } from 'redux/slices/pizzaSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const { items, pages, status } = useSelector(selectPizzaData);
  const { categoryId, sorts: sortBy, currentPage, searchValue } = useSelector(selectFilter);

  const onChangePage = number => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : '';
    dispatch(fetchPizzas({ categoryId, sortBy, currentPage, search }));
  }, [dispatch, categoryId, sortBy, currentPage, searchValue]);

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
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            Произошла ошибка <span>&#128533;</span>
          </h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination pageCount={pages} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
