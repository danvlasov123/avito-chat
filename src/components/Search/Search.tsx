import { FC } from 'react';
import { Button, Input } from 'src/components/UI';
import { SearchProps } from './types';
import { SearchIcon } from '../Icons';

import './Search.scss';
import cn from 'classnames';

const Search: FC<SearchProps> = ({ wrapperClassName, ...props }) => {
  const inputSearchClassName = cn('input-search', wrapperClassName);
  return (
    <Input
      wrapperClassName={inputSearchClassName}
      variant='secondary'
      startAdornment={
        <Button variant='transparent'>
          <SearchIcon width={16} height={16} />
        </Button>
      }
      {...props}
    />
  );
};

export { Search };
