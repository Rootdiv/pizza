import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, Sort, PizzaBlock, Skeleton } from 'components';

import { setCategoryId, setCurrentPage } from 'redux/slices/filterSlice';
import { fetchPizzas } from 'redux/actions/pizzas';
import { addPizzaToCart } from 'redux/actions/cart';
import { Pagination } from 'components/Pagination';

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.rootReducer.pizzas.items);
  const pages = useSelector(state => state.rootReducer.pizzas.pages);
  const cartItems = useSelector(state => state.rootReducer.cart.items);
  const isLoaded = useSelector(state => state.rootReducer.pizzas.isLoaded);
  const { categoryId, sorts: sortBy, currentPage } = useSelector(state => state.filter);

  const onChangePage = number => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    if (!window.location.search) {
      dispatch(fetchPizzas(currentPage, categoryId, sortBy));
      window.scrollTo(0, 0);
    }
  }, [dispatch, categoryId, sortBy, currentPage]);

  const onChangeCategory = id => {
    dispatch(setCategoryId(id));
  };

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
