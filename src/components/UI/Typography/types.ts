import { ComponentProps } from 'react';

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

export type TypographyProps = {
  as?: TypographyVariants;
  className?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  lineHeight?: string | number;
  uppercase?: boolean;
  padding?: string;
} & ComponentProps<TypographyVariants>;
