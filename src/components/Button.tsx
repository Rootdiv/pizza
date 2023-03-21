import React, { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  onClick: () => void;
  disabled: boolean;
  className: string;
  children: ReactNode;
};

export const Button: React.FC<Partial<Props>> = ({ onClick, disabled, className, children }) => (
  <button type="button" disabled={disabled} onClick={onClick} className={clsx('button', 'button--outline', className)}>
    {children}
  </button>
);
