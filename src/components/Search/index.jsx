import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from 'redux/actions/filters';
import { fetchPizzas } from 'redux/actions/pizzas';

import { ReactComponent as ClearIcon } from 'assets/img/clear-icon.svg';

import styles from './Search.module.scss';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const inputRef = useRef();
  const navigation = useNavigate();

  const { currentPage, categoryId, sortBy } = useSelector(({ filters }) => filters);

  const handlerSubmit = event => {
    event.preventDefault();
    if (search.trim() !== '') {
      dispatch(fetchPizzas(currentPage, categoryId, sortBy, search));
    }
    navigation('/search');
  };

  const onClickClear = () => {
    setSearch('');
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  const onChangeInput = event => {
    setSearch(event.target.value);
  };

  return (
    <form className={styles.root} onSubmit={handlerSubmit}>
      <button className={styles.button}>
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <circle cx="14" cy="14" r="9" fill="none" stroke="#000" />
          <path fill="none" stroke="#000" d="m27 27-6.634-6.634" />
        </svg>
      </button>
      <input
        ref={inputRef}
        value={search}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {search && <ClearIcon width={20} height={20} className={styles.clearIcon} onClick={onClickClear} />}
    </form>
  );
};
