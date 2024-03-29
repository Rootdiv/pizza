import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => (
  <div className={styles.root}>
    <h1>
      <span>&#128533;</span>
      <br />
      Ничего не найдено
    </h1>
    <p className={styles.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
  </div>
);
