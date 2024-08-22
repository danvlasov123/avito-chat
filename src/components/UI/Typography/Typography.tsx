import { CSSProperties, FC, PropsWithChildren, createElement } from 'react';
import { TypographyProps } from './types';
import './Typography.scss';
import cn from 'classnames';

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  as = 'p',
  className = '',
  color = 'initial',
  fontSize = 14,
  fontWeight = 400,
  lineHeight = '16px',
  padding = '',
  uppercase,
  ...props
}) => {
  const TypographyClassName = cn(`text-${as}`, className);

  const style: CSSProperties = {
    color,
    fontSize,
    fontWeight,
    lineHeight,
    ...(uppercase && { textTransform: 'uppercase' }),
    ...(padding && { padding }),
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
