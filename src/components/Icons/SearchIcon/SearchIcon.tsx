import { FC } from 'react';
import { IconProps } from '../types';

const SearchIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = 'var(--grey)',
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      {...props}
      fill='none'
    >
      <path
        stroke={fill}
        strokeLinecap='round'
        d='M11.284 11.36 13.6 13.6m-.747-5.973a5.227 5.227 0 1 1-10.453 0 5.227 5.227 0 0 1 10.453 0Z'
      ></path>
    </svg>
  );
};

export { SearchIcon };
