import React from 'react';
import clsx from 'clsx';

type Props = {
  onClick: () => void;
  className: string;
  outline: boolean;
  children: React.ReactNode;
};

export const Button = ({ onClick, className, outline, children }: Partial<Props>) => (
  <button
    onClick={onClick}
    className={clsx('button', className, {
      'button--outline': outline,
    })}>
    {children}
  </button>
);
