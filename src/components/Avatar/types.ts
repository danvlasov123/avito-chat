import { ComponentProps } from 'react';

export type AvatarProps = {
  name: string;
  icon?: 'telegram' | 'whatsapp';
  iconProps?: ComponentProps<'span'>;
} & ComponentProps<'img'>;
