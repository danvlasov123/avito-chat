import { Search } from 'src/components/Search';

import './SidebarSearch.scss';

import { motion } from 'framer-motion';

const SidebarSearch = () => {
  return (
    <motion.div
      className='sidebar-search'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Search
        placeholder='Поиск'
        wrapperClassName='sidebar-search__search'
        className='sidebar-search__search--input'
      />
    </motion.div>
  );
};

export { SidebarSearch };
