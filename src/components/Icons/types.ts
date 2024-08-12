import { ComponentProps } from 'react';

export type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
} & ComponentProps<'svg'>;
