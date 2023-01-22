import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Button = ({ onClick, className, outline, children }) => (
  <button
    onClick={onClick}
    className={clsx('button', className, {
      'button--outline': outline,
    })}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
};
