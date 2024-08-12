import { ComponentProps, ReactElement } from 'react';

export type InputDefaultProps = ComponentProps<'input'>;

export type InputProps = {
  startAdornment?: ReactElement;
  endAdornment?: ReactElement;
  wrapperClassName?: string;
} & InputDefaultProps;
