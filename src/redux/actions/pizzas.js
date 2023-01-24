import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
});

export const setPizzas = items => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = (categoryId, sortBy) => dispatch => {
  dispatch(setLoaded(false));
  const categorySort = categoryId !== 0 ? `category=${categoryId}&` : '';
  const sortType = sortBy.type.replace('-', '');
  axios
    .get(`https://63cecf0ad2e8c29a9bdf490d.mockapi.io/pizzas?${categorySort}sortBy=${sortType}&order=${sortBy.order}`)
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
