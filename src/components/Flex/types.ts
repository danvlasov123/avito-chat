import { ComponentProps } from 'react';

export type FlexJustifyContent =
  | 'center'
  | 'start'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'end';
export type FLexAlignItems = 'center' | 'start' | 'end';

export type FlexDirection = 'row' | 'column';

export type FlexProps = {
  justifyContent?: FlexJustifyContent;
  alignItems?: FLexAlignItems;
  gap?: number;
  direction?: FlexDirection;
  full?: boolean;
} & ComponentProps<'div'>;
