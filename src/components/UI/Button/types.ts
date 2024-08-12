import { ComponentProps } from 'react';

export type ButtonVariants = 'primary' | 'grey' | 'transparent';

export type ButtonProps = {
  variant?: ButtonVariants;
} & ComponentProps<'button'>;
