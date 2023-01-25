import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
});

export const setPizzas = items => ({
  type: 'SET_PIZZAS',
  payload: items,
});

//const URL = 'https://63cecf0ad2e8c29a9bdf490d.mockapi.io';
const URL = `${window.location.protocol}//${window.location.hostname}:2010`;

export const fetchPizzas = (page, categoryId, sortBy, searchValue) => dispatch => {
  dispatch(setLoaded(false));
  const categorySort = categoryId !== 0 ? `category=${categoryId}&` : '';
  const sortType = sortBy.type.replace('-', '');
  const search = searchValue ? `&search=${searchValue}` : '';

  axios
    .get(`${URL}/pizzas?page=${page}&limit=4&${categorySort}sortby=${sortType}&order=${sortBy.order}${search}`)
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
