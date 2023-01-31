import React, { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  onClick: () => void;
  className: string;
  outline: boolean;
  children: ReactNode;
};

export const Button: React.FC<Partial<Props>> = ({ onClick, className, outline, children }) => (
  <button
    onClick={onClick}
    className={clsx('button', className, {
      'button--outline': outline,
    })}>
    {children}
  </button>
);
