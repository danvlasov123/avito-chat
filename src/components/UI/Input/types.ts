import { ComponentProps, ReactElement } from 'react';

export type InputDefaultProps = ComponentProps<'input' | 'textarea'>;

export type InputVariants = 'primary' | 'secondary';

export type InputSize = 'small' | 'large';

export type InputProps = Omit<InputDefaultProps, 'onChange' | 'value'> & {
  startAdornment?: ReactElement;
  endAdornment?: ReactElement;
  wrapperClassName?: string;
  variant?: InputVariants;
  value?: string;
  as?: 'input' | 'textarea';
  onChange?: (value: string) => void;
};
