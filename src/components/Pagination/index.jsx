import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

export const Pagination = ({ currentPage, pageCount, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={event => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={pageCount}
    forcePage={currentPage - 1}
    renderOnZeroPageCount={null}
  />
);
