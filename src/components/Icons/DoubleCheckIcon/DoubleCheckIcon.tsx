import { FC } from 'react';
import { IconProps } from '../types';

const DoubleCheckIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = '#9ca3af',
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke={fill}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M18 6 7 17l-5-5'></path>
      <path d='m22 10-7.5 7.5L13 16'></path>
    </svg>
  );
};

export { DoubleCheckIcon };
