import { CSSProperties, FC, PropsWithChildren, createElement } from 'react';
import { TypographyProps } from './types';
import './Typography.scss';
import cn from 'classnames';

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  as = 'p',
  className = '',
  color = 'initial',
  ...props
}) => {
  const TypographyClassName = cn(`text-${as}`, className);

  const style: CSSProperties = {
    color,
    ...props.style,
  };

  const element = createElement(
    as,
    { ...props, className: TypographyClassName, style },
    children
  );

  return element;
};

export { Typography };
