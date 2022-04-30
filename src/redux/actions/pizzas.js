import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
});

export const setPizzas = items => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = (category, sortBy) => dispatch => {
  dispatch(setLoaded(false));
  const categorySort = category !== null ? `category=${category}&` : '';
  axios.get(
    `/pizzas?${categorySort}_sort=${sortBy.type}&_order=${sortBy.order}`,
  ).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};
