import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  pageCount: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ pageCount, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel="&gt;"
    previousLabel="&lt;"
    onPageChange={event => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={pageCount}
  />
);
