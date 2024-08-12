import { Search } from 'src/components/Search';

import './SidebarSearch.scss';

const SidebarSearch = () => {
  return (
    <div className='sidebar-search'>
      <Search placeholder='Поиск' wrapperClassName='sidebar-search__search' />
    </div>
  );
};

export { SidebarSearch };
