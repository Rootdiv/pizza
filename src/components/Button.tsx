import React, { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  onClick: () => void;
  disabled: boolean;
  className: string;
  outline: boolean;
  children: ReactNode;
};

export const Button: React.FC<Partial<Props>> = ({ onClick, disabled, className, outline, children }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={clsx('button', className, {
      'button--outline': outline,
    })}>
    {children}
  </button>
);
