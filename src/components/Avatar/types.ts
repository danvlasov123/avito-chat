import { ComponentProps } from 'react';

export type AvatarProps = {
  name: string;
} & ComponentProps<'img'>;
