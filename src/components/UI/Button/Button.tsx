import { FC, PropsWithChildren } from 'react';
import { ButtonProps } from './types';
import cn from 'classnames';
import './Button.scss';

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const buttonClassName = cn('btn', `btn--${variant}`, className);
  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  );
};

export { Button };
