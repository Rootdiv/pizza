import React, { useState, useRef, useMemo, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '@/redux/filter/slice';
import debounce from 'lodash.debounce';

import { ReactComponent as ClearIcon } from '@/assets/img/clear-icon.svg';

import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  const updateSearchValue = useMemo(
    () =>
      debounce((str: string) => {
        dispatch(setSearchValue(str));
      }, 500),
    [dispatch],
  );
  //Типизируем событие и указываем из какого элемента оно должно придти
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle cx="14" cy="14" r="9" fill="none" stroke="#000" />
        <path fill="none" stroke="#000" d="m27 27-6.634-6.634" />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && <ClearIcon width={20} height={20} className={styles.clearIcon} onClick={onClickClear} />}
    </div>
  );
};
